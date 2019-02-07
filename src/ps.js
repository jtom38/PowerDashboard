//import Shell from 'node-powershell';
const Shell = require('node-powershell');
const path = require('path');

function runScript(PathScript, Param){
    let ps = new Shell({
        executionPolicy: 'Bypass',
        noProfile: true
    });

    ps.addCommand(PathScript, [
        Param
    ]);

    ps.invoke()
    .then(output =>{
        console.log(output);
    })
    .catch(err => {
        console.error(err);
        ps.dispose();
    })
}

/*
let p = path.resolve('../scripts/..');

//ps.addCommand('echo node-powershell')
//ps.addCommand('exit')
ps.addCommand("../scripts/HelloWorld.ps1", [
    {Echo: 'Testing from node!'}
])

// clean up once we finish our script
ps.on('end', end => {
    console.log('Script has finished.')
});

ps.on('output', data =>{
    console.log(data);
});

ps.on('err', err =>{
    console.error(err);
    ps.dispose();
});

ps.invoke()
    .then(output =>{
        console.log(output);
    })
    .catch(err => {
        console.error(err);
        ps.dispose();
    })
*/
