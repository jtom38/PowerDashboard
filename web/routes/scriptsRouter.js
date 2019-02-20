var express = require('express');
var router = express.Router();
var PowerShell = require('../../src/PowerShell');

var avilableScripts = require('../../scripts/scripts');
var JsonHelper = require('../../src/JsonHelper');
var sqlTasks = require('../../src/sqlite/tasks');
var sqlLogs = require('../../src/sqlite/logs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./scripts/index', { 
    title: 'Available Scripts',
    scripts: avilableScripts});
});

// /scripts/ScriptName
router.get('/:script/', function (req, res, next) {

  let title = req.params
  let ele

  // Search the json for the record we want
  JsonHelper.SearchScriptsJson(title.script, function (err, element) {
    // Copy the data back for later
    ele = element;

    //Once we find the record now search though SQL
    sqlTasks.SelectJoinLogs(title.script, function (err, rows) {
        
      // Display the page with the data
      res.render('./scripts/info', {
        title: title.script,
        details: ele,
        tasks: rows,
        queueAlert: false
      });
    });
  })
})

router.get('/:script/details', function (req, res, next) {

  let title = req.params

  // Search the json for the record we want
  JsonHelper.SearchScriptsJson(title.script, function (err, element) {
    // This is bad use but if we find the element we want we will move forward
    
    res.render('./scripts/details', {
      title: title.script,
      details: element,
    });
  });
});

router.post('/:script/run', function (req, res, next) {
  
  // Extract out our params
  let title = req.params;
  let param = req.params;
  let body = req.body;

  // Search the json for the record we want
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
});

router.get('/:script/logs/:LogID',function (req, res, next) {
  let title = req.params.script;
  let LogID = req.params.LogID

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
});



module.exports = router;
