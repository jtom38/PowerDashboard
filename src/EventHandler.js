const events = require('events');
const myEvent = new events();

let sayEvent = require('./SayEvent');
myEvent.on('say', (msg) =>{
    sayEvent(msg);
})


let runPsScript = require('./ps/EventRunPsScript');
myEvent.on('run-ps-script', (PathScript, Name, Args, LogPath) =>{
    runPsScript(PathScript, Name, Args, LogPath);
});

module.exports = myEvent;