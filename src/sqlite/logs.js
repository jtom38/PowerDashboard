let sql = require('sqlite3').verbose();
let db = new sql.Database("db.sqlite");
let table = "logs";

function SelectAll(callback) {
    db.all(`select * from '${table}' where Status = 'Active'`, function (err, rows) {
        if(err) { return callback(err); }
        return callback(null, rows);
    });
}

function SelectAllByName(Task, callback){
    db.all(`select * from '${table}' where Task = '${Task}'`, function (err, rows) {
        if(err) { callback(err); }        
        return callback(null,rows);
    });
}

function SelectLogIDByScript(Task, callback){
    db.all(`select LogsID from '${table}' where Task = '${Task}'`, function (err, rows) {
        if(err) { callback(err); }        
        return callback(null,rows);
    });
}

function SelectID(LogsID, callback){
    db.all(`select * from '${table}' where LogsID = '${LogsID}'`, function (err, rows) {
        if(err) { callback(err); }        
        return callback(null,rows);
    });
}

function InsertNewLog(LogsID, Task, Data, callback){
    db.run(`insert into '${table}' ( LogsID, Task, Data) Values ( '${LogsID}', '${Task}', '${Data}')`, function (err, result) {
       if (err) {return callback(err);}
       return callback(null, true);
    });
}

module.exports = { 
    SelectAll,
    SelectAllByName,
    SelectLogIDByScript,
    SelectID,
    InsertNewLog
}