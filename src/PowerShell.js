
const Shell = require('node-powershell');
const path = require('path');
const fs = require('fs');

function runScript(PathScript, Args, logPath ){
    let ps = new Shell({
        executionPolicy: 'Bypass',
        noProfile: true
    });

    //ps.addCommand('ls')
    
    if( Args == undefined){
        //let p = path.resolve(PathScript)
        ps.addCommand(PathScript);
    }else {
        ps.addCommand(PathScript, [
            Args
            //{Echo: 'Testing from node!'}
        ]);
    }
    

    ps.invoke()
    .then(output =>{
        fs.appendFile(logPath, '\n'+output, (err)=>{
            if(err) throw err;
            console.log(output);
        });      
    })
    .catch(err => {
        console.error(err);
        ps.dispose();
    })
}

module.exports.runScript = runScript;