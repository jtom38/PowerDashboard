var express = require('express');
var router = express.Router();

var scriptsJson = require('../../scripts/scripts');
var sqlTasks = require('../../src/sqlite/TasksRepo');

let EventHandler = require('../../src/EventHandler');

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

router.get('/:script/say/:msg', function(req, res, next) {
  let title = req.params.script;
  let msg = req.params.msg
  EventHandler.emit('say', `${title}: ${msg}`);

  res.status(200).send({
    title: title,
    msg: msg
  });

});

module.exports = router;
