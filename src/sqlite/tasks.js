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

function Insert(Name, Status, StartTime,FinishTime){
    db.run("insert into tasks ( Name, Status, StartTime,FinishTime,LogData) Values ( 'HelloWorld', 'Active', '02/14/2019 03:01:00 PM', '', 1)")
}

function Update(ID){
    db.run("insert into tasks ( Name, Status, StartTime,FinishTime,LogData) Values ( 'HelloWorld', 'Active', '02/14/2019 03:01:00 PM', '', 1)")
}

module.exports = {Select};