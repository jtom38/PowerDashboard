let sql = require('./src/sqlite/init');
let tasksPending = require('./src/sqlite/tasks');
//let tasksActive = require('./src/sqlite/')

let dt = require('./src/DateTime');
console.log(dt.GetDateTime());

//sql.GenerateTables()
tasksPending.Select();