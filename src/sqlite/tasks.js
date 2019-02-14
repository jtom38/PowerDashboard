let sql = require('sqlite3').verbose();
let db = new sql.Database("db.sqlite");

function Select(){
    db.all("select * from 'tasks' where Status = 'Active'", function (err, rows) {
        if(err) {
            console.error(err);
        }
        
        return rows;
    });
}

function Insert(){
    //db.run()
}

module.exports = {Select};