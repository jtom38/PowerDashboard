var express = require('express');
var router = express.Router();
//let tasksPending = require('../../src/sqlite/tasksPending');
let sql = require('sqlite3').verbose();
let db

router.get('/active', function(req, res, next) {
  db = new sql.Database("db.sqlite");

  db.all("select * from 'tasks' where Status = 'Active'", function (err, rows) {
    if(err) {
      res.render('./tasks/active', { 
        title: 'Tasks: Active',
        tasks: null});
    }
    
    res.render('./tasks/active', { 
      title: 'Tasks: Active',
      tasks: rows});
  });

});

router.get('/history', function(req, res, next) {
  db = new sql.Database("db.sqlite");

  db.all("select * from 'tasks' where Status = 'Finished'", function (err, rows) {
    if(err) {
      res.render('./tasks/history', { 
        title: 'Tasks: History',
        tasks: null});
    }
    
    res.render('./tasks/history', { 
      title: 'Tasks: History',
      tasks: rows});
  });
});


module.exports = router;