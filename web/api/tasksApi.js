var express = require('express');
var router = express.Router();
var sqlTasks = require('../../src/sqlite/tasks');

router.get('/', function(req, res, next) {
  sqlTasks.

  res.status(200).send({
    title: 'root'
  })
});

router.get('/:LogID', function (req,res,next) {


  res.status(200).send({
    title: 'About'
  });
});

module.exports = router;
