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

function SelectID(ID, callback){
    db.all(`select * from '${table}' where ID = '${ID}'`, function (err, rows) {
        if(err) { callback(err); }        
        return callback(null,rows);
    });
}

function InsertNewLog(ID, Task, TaskID, Data, callback){
    db.run(`insert into '${table}' ( ID, Task, TaskID, Data) Values ( '${ID}', '${Task}', '${TaskID}', '${Data}')`, function (err, result) {
       if (err) {return callback(err);}
       return callback(null, true);
    });
}


module.exports = { 
    SelectAll,
    SelectID,
    InsertNewLog
}