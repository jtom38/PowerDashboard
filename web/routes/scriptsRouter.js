var express = require('express');
var router = express.Router();
var PowerShell = require('../../src/ps/PowerShell');
var Promise = require('bluebird');
var SQLite = require('../../src/sqlite/SQLite');
var TasksRepo = require('../../src/sqlite/TasksRepo');
var LogsRepo = require('../../src/sqlite/LogsRepo');
const uuid = require('uuid/v4');
const dt = require('../../src/DateTime');

var avilableScripts = require('../../scripts/scripts');
var JsonHelper = Promise.promisifyAll(require('../../src/JsonHelper'));

let sqlite = new SQLite('./db.sqlite');
let tasksTable = new TasksRepo(sqlite);
let logsTable = new LogsRepo(sqlite);


//var sqlTasks = require('../../src/sqlite/tasks');
//var sqlLogs = require('../../src/sqlite/logs');

/* GET home page. */
router.get('/', async function(req, res, next) {
  await res.render('./scripts/index', { 
    title: 'Available Scripts',
    scripts: avilableScripts});
});

// /scripts/ScriptName
router.get('/:script/', async function (req, res, next) {

  let title = req.params;
  let _element;
  let _sqlData;

  //Get the information from the json and store it
  _element = await JsonHelper.SearchScriptsJson(title.script)
    
  // Check SQL for log data based off the script name
  _sqlData = await tasksTable.GetAllJoinLogsWhereName(title.script)
  
  // Render the page with the information we have.
  await res.render('./scripts/info', {
    title: title.script,
    details: _element,
    tasks: _sqlData,
    queueAlert: false
  });
})

router.get('/:script/details', async function (req, res, next) {

  let title = req.params

  // Search the json for the record we want
  let _element = await JsonHelper.SearchScriptsJson(title.script);

  await res.render('./script/details', {
    title: title.script,
    details: _element
  });
});

router.post('/:script/run', async function (req, res, next) {
  
  // Extract out our params
  let title = req.params.script;
  let param = req.params;
  let body = req.body;

  let jsonBody = JSON.stringify(body);

  // Search the json for the record we want
  let element = await JsonHelper.SearchScriptsJson(title);
  
  let guid = uuid();
  let startTime = dt.GetDateTime();
  await tasksTable.Insert(guid, title, 'Pending', startTime, "Manual", jsonBody);

  await res.render('./scripts/run', {
    title: title.script,
    details: element
  })

  /*
  JsonHelper.SearchScriptsJson(title.script, function (err, element) {

    // Run PowerShell as a sync task because we do want it to run in the background.
    if ( req.body == undefined){
      PowerShell.runScript(element.ps1Path, title.script, undefined, element.logPath)
    }
    else {
      PowerShell.runScript(element.ps1Path, title.script, req.body, element.logPath)
    }

    // This is bad use but if we find the element we want we will move forward
    res.render('./scripts/run', {
      title: title.script,
      details: element,
    });
  });
  */
});

router.get('/:script/logs/:LogID', async function (req, res, next) {
  let title = req.params.script;
  let LogID = req.params.LogID

  let _element = await JsonHelper.SearchScriptsJson(title);

  let _log = await LogsRepo.GetAllByLogsID(LogID);

  let newData = await JSON.parse(_log[0].Data);
  await res.render('./scripts/logs', {
    title: title,
    script: _element,
    data: newData
  });
  /*
  JsonHelper.SearchScriptsJson(title, function (err,element) {
    // Get the data from SQL for the :logs
    sqlLogs.SelectID(LogID, function(err,data){

      let newData = JSON.parse(data[0].Data);
      res.render('./scripts/logs',{
        title: title,
        script: element,
        data: newData
      });
    
    });
  });
  */
});



module.exports = router;
