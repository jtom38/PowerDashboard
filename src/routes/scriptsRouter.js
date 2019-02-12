var express = require('express');
var router = express.Router();
var PowerShell = require('../PowerShell');

var avilableScripts = require('../../scripts/scripts');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('scriptsIndex', { 
    title: 'Express',
    scripts: avilableScripts});
});

router.get('/:script/', function (req, res, next) {

  let title = req.params

  avilableScripts.Scripts.forEach(element => {
    if (element.Name == title.script){

      // This is bad use but if we find the element we want we will move forward
      res.render('scriptsInfo', {
        title: title.script,
        details: element,
      });

    }

  });
})

router.get('/:script/details', function (req, res, next) {

  let title = req.params

  avilableScripts.Scripts.forEach(element => {
    if (element.Name == title.script){

      // This is bad use but if we find the element we want we will move forward
      res.render('scriptsDetails', {
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

      /*
      // Once we find the one we want, Get the script location
      let ScriptPath = element.ps1Path

      Object.keys(req.body).forEach(key =>{
        if(req.body[key] == ""){
          
        }
      });
      */

      if ( req.body == undefined){
        PowerShell.runScript(element.ps1Path, undefined, element.logPath)
      }
      else {
        PowerShell.runScript(element.ps1Path, req.body, element.logPath)
      }
      
      // This is bad use but if we find the element we want we will move forward
      res.render('scriptRun', {
        title: title.script,
        details: element,
      });

    }

  });
});

router.get('/queuescript', function (req, res, next) {

  res.render('queuescript');
  
})

router.get('/readyscript/:script/logs'), function (req, res, next) {
  
}

module.exports = router;