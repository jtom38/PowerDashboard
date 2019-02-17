
const Shell = require('node-powershell');
const path = require('path');
const fs = require('fs');
const uuid = require('uuid/v4');
const sqlTasks = require('./sqlite/tasks');
const dt = require('./DateTime');

function runScript(PathScript, Args, logPath ){


    let ps = new Shell({
        executionPolicy: 'Bypass',
        noProfile: true,
        
    });
    
    // Process the args and replace what we got so we can use it with PS
    ParseArgs(Args, function (ArgsArray) {
        Args = ArgsArray;
    });
    
    // Generate a new ID for SQL
    let guid = uuid();

    sqlTasks.Insert('')

    if( Args == undefined){
        //let p = path.resolve(PathScript)
        ps.addCommand(PathScript);
    } else {
        //{Echo: 'Testing from node!'}
        ps.addCommand(PathScript, ArgsArray);
    }

    ps.invoke()
    .then(output => {
        // Update the record that we finished

        // Load the results we got back into logs with the guid
    })
    .catch(err => { 
        console.log(err);
        ps.dispose();
    })
}

function ParseArgs(Args, Callback){
    let ArgsArray = [];
    let a = Object.keys(Args);
    a.forEach(key =>{
        if(Args[key] != ""){
            //let s = `{${key}: ${Args[key]}},`;
            let s = `${key} ${Args[key]}`;
            ArgsArray.push(s);
        }
    });
    return Callback(ArgsArray);
}

module.exports.runScript = runScript;