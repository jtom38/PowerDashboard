var express = require('express');
var router = express.Router();
//let tasksPending = require('../../src/sqlite/tasksPending');
let sql = require('sqlite3').verbose();
let db = new sql.Database("db.sqlite");

router.get('/active', function(req, res, next) {

  db.all("select * from 'tasks' where Status = 'Active'", function (err, rows) {
    if(err) {
        console.error(err);
    }
    
    res.render('./tasks/active', { 
      title: 'Tasks: Active',
      tasks: rows});
  });

});

router.get('/history', function(req, res, next) {
    res.render('./tasks/history', { 
      title: 'Tasks: History'});
  });


module.exports = router;