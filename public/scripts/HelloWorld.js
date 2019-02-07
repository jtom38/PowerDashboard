const $ = require('jquery');
const Shell = require('node-powershell');

$(document).ready(() => {
    let ps = new Shell({
        executionPolicy: 'Bypass',
        noProfile: true
    });

    ps.addCommand('./HelloWorld.ps1', [
        {Echo: 'Testing from node!'}
    ]);

    ps.invoke()
    .then(output =>{
        console.log(output);
    })
    .catch(err => {
        console.error(err);
        ps.dispose();
    })
})