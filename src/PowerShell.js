
const PowerShell = require('powershell');
const path = require('path');
const fs = require('fs');
const uuid = require('uuid/v4');
const sqlTasks = require('./sqlite/tasks');
const sqlLogs = require('./sqlite/logs');
const dt = require('./DateTime');
const os = require('os');

function runScript(PathScript, Name, Args, logPath ){
    
    // This contains the output from the script
    let output = [];

    // Process the args and replace what we got so we can use it with PS
    ParseArgs(Args, function (ArgsArray) {
        Args = ArgsArray;

        let script = PathScript;
        ArgsArray.forEach(param =>{
            script = script + param
        });

        // Generate a new ID for SQL
        let guid = uuid();
        let startTime = dt.GetDateTime();
        sqlTasks.InsertNewTask(guid, Name, 'Active', startTime, function (err, res) {
            if(err) { console.error(err); }
            if(res == true){

                // We added our record to sql, yay
                let ps 
                if(os.platform == 'win32') {
                    ps = new PowerShell(script, {
                        executionPolicy: 'Bypass',
                        noProfile: true,
                    });
                } else {
                    ps = new PowerShell(script, {
                        executionPolicy: 'Bypass',
                        noProfile: true,
                        PSCore: true
                    });
                }

                ps.on("error", err => {
                    console.error(err);
                });
                
                // Stdout
                
                ps.on("output", data => {                    
                    let s = data.split("\n");
                    s.forEach(line => {
                        if(line != ""){
                            console.log(line);
                            output.push(line);
                        }
                    });
                    //output.push(`${data},`);
                });
                
                // Stderr
                ps.on("error-output", data => {
                    console.error(data);
                });
            
                ps.on('end', code => {
                    // Update the task with the time we finished
                    let finishTime = dt.GetDateTime();
                    sqlTasks.Update(guid, finishTime, function (err, res) {
                        if (err) { console.error(err); }
                        if(res == true) {
                            console.log("Updated that we finished our task.");

                            if (output.length != 0){
                                // generate a new object
                                let obj = {}
                                // load our array into object and throw it into sql
                                obj.Output = output;
                                let objString = JSON.stringify(obj);
                                sqlLogs.InsertNewLog(guid, Name, objString, function (err, res) {
                                    if(err){console.error(err);}
                                    if(res==true){
                                        console.log("script output was saved to tbl.Logs ID: "+guid );
                                    }
                                });
                            }
                        }
                    });

                });
            }
        });
    });
}

function ParseArgs(Args, Callback){
    let ArgsArray = [];
    let a = Object.keys(Args);
    a.forEach(key =>{
        if(Args[key] != ""){
            let s = ` -${key} ${Args[key]}`;
            ArgsArray.push(s);
        }
    });
    return Callback(ArgsArray);
}

function ParseOutput(data, Callback){

}

module.exports.runScript = runScript;