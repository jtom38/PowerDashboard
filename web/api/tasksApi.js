var express = require('express');
var router = express.Router();

var scriptsJson = require('../../scripts/scripts');
var sqlTasks = require('../../src/sqlite/tasks');

// list all avilable scripts
router.get('/', function(req, res, next) {
  scriptsJson.Scripts

  res.status(200).send({
    title: 'root'
  })
});

router.get('/:script/', function (req,res,next) {
  res.status(200).send({
    title: 'About'
  });
});

module.exports = router;
