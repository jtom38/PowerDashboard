let sql = require('./src/sqlite/init');
let tasksPending = require('./src/sqlite/tasks');
//let tasksActive = require('./src/sqlite/')

let DateTime = require('./src/DateTime');
DateTime.GetDateTime();

//sql.GenerateTables()
tasksPending.Select();