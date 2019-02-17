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

function SelectWhereName(Name, callback){
    db.all(`select * from 'tasks' where Name = '${Name}'`, function (err, rows) {
        if(err) { callback(err); }        
        return callback(null,rows);
    });
}

function SelectJoinLogs(Script,callback){
    let cmd = `select * from tasks inner join logs on logs.LogsID = tasks.TasksID where Name = '${Script}'`;
    db.all(cmd, function (err, rows) {
        if(err){callback(err);}
        return callback(null,rows);
    })
}

function InsertNewTask(TasksID, Name, Status, StartTime, callback){
    db.run(`insert into tasks ( TasksID, Name, Status, StartTime) Values ( '${TasksID}', '${Name}', '${Status}', '${StartTime}')`, function (err, result) {
       if (err) {return callback(err);}
       return callback(null, true);
    });
}

function Update(TasksID, FinishTime, callback){
    db.run(`update tasks set Status = 'Finished', FinishTime= '${FinishTime}' Where TasksID = '${TasksID}'`, function (err, result) {
        if (err) {return callback(err);}
        return callback(null, true);
    })
}

module.exports = { 
    SelectAllActive,
    SelectAllFinished,
    SelectWhere, 
    SelectWhereName,
    SelectJoinLogs,
    InsertNewTask, 
    Update
};