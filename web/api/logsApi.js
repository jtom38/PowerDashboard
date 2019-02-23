var express = require('express');
var router = express.Router();
let SQLite = require('../../src/sqlite/SQLite');
let LogsRepo = require('../../src/sqlite/LogsRepo');

let sqlite = new SQLite('./db.sqlite');
let logsTable = new LogsRepo(sqlite);


// returns all the records
router.get('/:script/', function(req, res, next) {
  let title = req.params.script;
  //let LogID = req.params.LogID
  
  logsTable.GetAllByName(title)
    .then( (data) => res.status(200).send({
      data
    }))
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
