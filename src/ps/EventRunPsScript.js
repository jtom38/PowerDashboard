
const PowerShell = require('powershell');
//const path = require('path');
//const fs = require('fs');
//const uuid = require('uuid/v4');
var Promise = require('bluebird');
var SQLite = require('../sqlite/SQLite');
var TasksRepo = require('../sqlite/TasksRepo');
var LogsRepo = require('../sqlite/LogsRepo');

const dt = require('../DateTime');
const os = require('os');

let sqlite = new SQLite('./db.sqlite');
let tasksTable = new TasksRepo(sqlite);
let logsTable = new LogsRepo(sqlite);

module.exports = async (PathScript, SqlRow) => {

    let Name = SqlRow.Name;
    let Args = SqlRow.Param
    // This contains the output from the script
    let output = [];

    let guid;
    let startTime;
    let ps = new PowerShell;
    let script;

    OnError(ps);
    OnOutput(ps);
    OnErrorOutput(ps);
    OnEnd(ps);

    let ArgsArray = await ParseArgs(Args);
    script = PathScript;
    ArgsArray.forEach(param =>{
        script = script + param
    });

    // Generate a new ID for SQL
    //guid = uuid();
    startTime = dt.GetDateTime();
    if(os.platform == 'win32') {
        ps(script, {
            executionPolicy: 'Bypass',
            noProfile: true,
        });
    } else {
        ps(script, {
            executionPolicy: 'Bypass',
            noProfile: true,
            PSCore: true
        });
    }

    // Process the args and replace what we got so we can use it with PS
    ParseArgs(Args)
        .then(ArgsArray => {
            Args = ArgsArray;


        })
        
        .then(insertResult => {

        })

}

function OnError(PowerShell) {
    PowerShell.on("error", err => {
        console.error(err);
    });
}

function OnOutput(PowerShell){
    // Stdout                
    PowerShell.on("output", data => {
        let s = data.split("\n");
        s.forEach(line => {
            if(line != ""){
                console.log(line);
                output.push(line);
            }
        });
        //output.push(`${data},`);
    });
}

function OnErrorOutput(PowerShell){
    PowerShell.on("error-output", data => {
        console.error(data);
    });
}

function OnEnd(PowerShell){
    PowerShell.on('end', code => {
        // Update the task with the time we finished
        let finishTime = dt.GetDateTime();
        let res = tasksTable.Update(guid, 'Finished', finishTime);

        if(res == true) {
            console.log("Updated that we finished our task.");

            if (output.length != 0){
                // generate a new object
                let obj = {}
                // load our array into object and throw it into sql
                obj.Output = output;
                let objString = JSON.stringify(obj);
                let logsInsertRes = logsTable.Insert(guid, Name, objString);
                if(logsInsertRes==true){
                    console.log("script output was saved to tbl.Logs ID: "+guid );
                }
            }
        }
    });
}

async function ParseArgs(Args){
    return new Promise( (resolve, reject) => {
        let ArgsArray = [];
        let a = Object.keys(Args);
        a.forEach(key =>{
            if(Args[key] != ""){
                let s = ` -${key} ${Args[key]}`;
                ArgsArray.push(s);
            }
        });

        return resolve(ArgsArray);
    })
}