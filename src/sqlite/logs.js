let sql = require('sqlite3').verbose();
let db = new sql.Database("db.sqlite");
let table = "logs";

function SelectAll(callback) {
    db.all(`select * from '${table}' where Status = 'Active'`, function (err, rows) {
        if(err) { return callback(err); }
        return callback(null, rows);
        //return rows;
    });
}

module.exports = { 
    SelectAll 
}