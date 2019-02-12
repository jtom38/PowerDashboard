
const Shell = require('node-powershell');
const path = require('path');
const fs = require('fs');

function runScript(PathScript, Args, logPath ){
    let ps = new Shell({
        executionPolicy: 'Bypass',
        noProfile: true
    });
    
    console.log(Args);
    
    let ArgsArray = [];
    let a = Object.keys(Args);
    a.forEach(key =>{
        if(Args[key] != ""){
            //let s = `{${key}: ${Args[key]}},`;
            let s = `${key} ${Args[key]}`;
            ArgsArray.push(s);
        }
    });
    

    if( Args == undefined){
        //let p = path.resolve(PathScript)
        ps.addCommand(PathScript);
    } else {
        //{Echo: 'Testing from node!'}
        ps.addCommand(PathScript, ArgsArray);
    }

    ps.invoke()
    .then(output =>{
        fs.appendFile(logPath, '\n'+output, (err)=>{
            if(err) throw err;
            console.log(output);
        });      
    })
    .catch(err => { 
        console.log(err);
        ps.dispose();
    })
}

module.exports.runScript = runScript;