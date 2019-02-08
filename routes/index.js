var express = require('express');
var router = express.Router();
var PowerShell = require('../src/PowerShell');

var avilableScripts = require('../scripts/scripts');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    scripts: avilableScripts});
});

router.get('/readyscript/:script', function (req, res, next) {

  let title = req.params

  avilableScripts.Scripts.forEach(element => {
    if (element.Name == title.script){

      // This is bad use but if we find the element we want we will move forward
      res.render('readyscript', {
        title: title.script,
        details: element,
      });

    }

  });
})

router.post('/readyscript/:script', function (req, res, next) {
  
  // Extract out our params
  let param = req.params
  avilableScripts.Scripts.forEach(element => {
    // Check the list of scripts and return the one we are looking for
    if (element.Name == param.script){

      // Once we find the one we want, Get the script location
      let ScriptPath = element.ps1Path

      PowerShell.runScript(element.ps1Path, undefined, element.logPath)



      // This is bad use but if we find the element we want we will move forward
      res.render('queuescript');

    }

  });


});

router.get('/queuescript', function (req, res, next) {

  res.render('queuescript');
  
})

module.exports = router;
