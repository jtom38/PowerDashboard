var express = require('express');
var router = express.Router();

var avilableScripts = require('../public/scripts/scripts');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    scripts: avilableScripts});
});

router.get('/readyscript/:script', function (req, res, next) {

  let title = req.params
  const $ = require('jquery');
  const Shell = require('node-powershell');
  avilableScripts.Scripts.forEach(element => {
    if (element.Name == title.script){

      // This is bad use but if we find the element we want we will move forward
      res.render('readyscript', {
        title: title.script,
        details: element,
        Shell: Shell,
        $, $
      })

    }
  });


})

module.exports = router;
