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

function Insert(Name, Status, StartTime,FinishTime, callback){
    db.run("insert into tasks ( Name, Status, StartTime,FinishTime,LogData) Values ( 'HelloWorld', 'Active', '02/14/2019 03:01:00 PM', '', 1)", function (err, result) {
       if (err) {return callback(err);}
       return callback(null, result);
    });
}

function Update(ID){
    db.run("insert into tasks ( Name, Status, StartTime,FinishTime,LogData) Values ( 'HelloWorld', 'Active', '02/14/2019 03:01:00 PM', '', 1)", function (err, result) {
        if (err) {return callback(err);}
        return callback(null, result);
    })
}

module.exports = { 
    SelectAllActive,
    SelectAllFinished,
    SelectWhere, 
    Insert, 
    Update
};