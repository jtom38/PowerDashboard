var express = require('express');
var router = express.Router();
let sqlLogs = require('../../src/sqlite/logs');

// returns all the records
router.get('/:script/', function(req, res, next) {
  let title = req.params.script;
  //let LogID = req.params.LogID
  // Get the data from SQL for the :logs
  sqlLogs.SelectLogIDByScript(title, function(err,data){

    res.status(200).send({
      data: data
    });
  
  });
});

router.get('/:script/:LogID', function(req, res, next) {
  let title = req.params.script;
  let LogID = req.params.LogID
  // Get the data from SQL for the :logs
  sqlLogs.SelectID(LogID, function(err,data){

    res.status(200).send({
      data: data[0].Data
    });
  
  });
});

module.exports = router;
