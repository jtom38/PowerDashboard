let sql = require('sqlite3').verbose();
let db = new sql.Database("db.sqlite");

function SelectAllActive(callback) {
    db.all("select * from 'tasks' where Status = 'Active'", function (err, rows) {
        if(err) { return callback(err); }
        return callback(null, rows);
        //return rows;
    });
}

function SelectAllFinished(callback) {
    db.all("select * from 'tasks' where Status = 'Finished'", function (err, rows) {
        if(err) { return callback(err); }
        return callback(null, rows);
        //return rows;
    });
}

function SelectWhere(callback){
    db.all("select * from 'tasks' where Status = 'Active'", function (err, rows) {
        if(err) { callback(err); }        
        return callback(null,rows);
    });
}

function InsertNewTask(ID, Name, Status, StartTime, callback){
    db.run(`insert into tasks ( ID, Name, Status, StartTime) Values ( '${ID}', '${Name}', '${Status}', '${StartTime}')`, function (err, result) {
       if (err) {return callback(err);}
       return callback(null, true);
    });
}

function Update(ID, FinishTime, callback){
    db.run(`update tasks set Status = 'Finished', FinishTime= '${FinishTime}', LogID = '${ID}' Where ID = '${ID}'`, function (err, result) {
        if (err) {return callback(err);}
        return callback(null, true);
    })
}

module.exports = { 
    SelectAllActive,
    SelectAllFinished,
    SelectWhere, 
    InsertNewTask, 
    Update
};