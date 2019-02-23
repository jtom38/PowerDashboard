var express = require('express');
var router = express.Router();

var SQLite = require('../../src/sqlite/SQLite');
var TasksRepo = require('../../src/sqlite/TasksRepo');
var LogsRepo = require('../../src/sqlite/LogsRepo');

let sqlite = new SQLite('./db.sqlite');
let tasksTable = new TasksRepo(sqlite);
let logsTable = new LogsRepo(sqlite);

router.get('/', async function (req, res, next) {

  let pending = await tasksTable.GetAllStatus('Pending');
  
  let active = await tasksTable.GetAllStatus('Active');

  let finished = await tasksTable.SelectJoinLogsWhereStatusTop100('Finished');

  await res.render('./tasks/index', {
    title: 'Tasks',
    active: active,
    history: finished,
    pending: pending
  });
});

router.get('/active', async function(req, res, next) {
  
  let active = await tasksTable.GetAllStatus('Active');

  await res.render('./tasks/active', { 
    title: 'Tasks: Active',
    tasks: active
  });

});

router.get('/history', async function(req, res, next) {
  
  let finished = await tasksTable.SelectJoinLogsWhereStatusTop100('Finished');
    
  await res.render('./tasks/history', { 
      title: 'Tasks: History',
      tasks: finished
  });
});

module.exports = router;