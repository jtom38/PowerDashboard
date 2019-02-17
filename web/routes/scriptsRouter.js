var express = require('express');
var router = express.Router();
var PowerShell = require('../../src/PowerShell');

var avilableScripts = require('../../scripts/scripts');
var sqlTasks = require('../../src/sqlite/tasks');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./scripts/index', { 
    title: 'Available Scripts',
    scripts: avilableScripts});
});

// /scripts/ScriptName
router.get('/:script/', function (req, res, next) {

  let title = req.params

  avilableScripts.Scripts.forEach(element => {
    if (element.Name == title.script){
      
      sqlTasks.SelectJoinLogs(title.script, function (err, rows) {
        
        res.render('./scripts/info', {
          title: title.script,
          details: element,
          tasks: rows
        });

      });
    }
  });
})

router.get('/:script/details', function (req, res, next) {

  let title = req.params

  avilableScripts.Scripts.forEach(element => {
    if (element.Name == title.script){

      // This is bad use but if we find the element we want we will move forward
      res.render('./scripts/details', {
        title: title.script,
        details: element,
      });

    }

  });
})

router.post('/:script/run', function (req, res, next) {
  
  // Extract out our params
  let title = req.params
  let param = req.params
  let body = req.body
  avilableScripts.Scripts.forEach(element => {
    // Check the list of scripts and return the one we are looking for
    if (element.Name == param.script){

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

    }

  });
});

router.get('/readyscript/:script/logs'), function (req, res, next) {
  
}

module.exports = router;
