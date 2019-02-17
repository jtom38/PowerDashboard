var express = require('express');
var router = express.Router();

var avilableScripts = require('../../scripts/scripts');
var sqlTasks = require('../../src/sqlite/tasks');

// list all avilable scripts
router.get('/', function(req, res, next) {
  avilableScripts

  res.status(200).send({
    title: 'root'
  })
});

router.get('/:script/run', function (req,res,next) {


  res.status(200).send({
    title: 'About'
  });
});

module.exports = router;
