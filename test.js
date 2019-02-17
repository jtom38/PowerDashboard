let sql = require('./src/sqlite/init');
let tasks = require('./src/sqlite/tasks');

sql.GenerateTables();

let DateTime = require('./src/DateTime');
DateTime.GetDateTime();

//sql.GenerateTables()
//tasksPending.Select();