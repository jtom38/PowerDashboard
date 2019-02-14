var express = require('express');
var router = express.Router();

var avilableScripts = require('../../scripts/scripts');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    scripts: avilableScripts});
});

router.get('/about', function (req,res,next) {
  res.render('indexAbout', {
    title: 'About'
  });
});

module.exports = router;
