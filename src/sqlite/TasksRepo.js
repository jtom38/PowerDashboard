"use strict";
//let sql = require('sqlite3').verbose();
//let db = new sql.Database("db.sqlite");

class TasksRepo{
    constructor(Sqlite){
        this.SQLite = Sqlite;
    }

    CreateTable(){
        let cmd = ``;
    }

    Insert(TasksID, Name, Status, StartTime, Source){
        let cmd = `INSERT INTO tasks ( TasksID, Name, Status, StartTime, Source)
            Values ('${TasksID}', '${Name}', '${Status}', '${StartTime}', '${Source}')`;
        return this.SQLite.run(cmd);
    }

    Update(TasksID, Status, FinishTime){
        let cmd = `UPDATE tasks SET 
            Status = '${Status}',
            FinishTime = '${FinishTime}'
            WHERE TasksID = '${TasksID}'
        `;
        return this.SQLite.run(cmd);
    }

    GetByTasksID(TasksID){
        let cmd = `SELECT * FROM tasks 
            WHERE TasksID = ${TasksID}`;
        return this.SQLite.get(cmd);
    }

    GetAllTasks(){
        let cmd = `SELECT * From tasks`;
        return this.SQLite.all(cmd);
    }

    GetAllByName(Name){
        let cmd = `SELECT * From tasks
            Where Name = '${Name}'`;
        return this.SQLite.all(cmd);
    }

    GetAllStatus(Status){
        let cmd = `SELECT * FROM tasks
            WHERE Status = '${Status}'`;
        return this.SQLite.all(cmd);
    }

    GetAllJoinLogsWhereName(Name){
        let cmd = `select * from tasks inner join 
            logs on logs.LogsID = tasks.TasksID 
            where Name = '${Name}' limit 100`;
        return this.SQLite.all(cmd);
    }

    SelectJoinLogsWhereStatusTop100(Status){
        let cmd = `select * from tasks inner join 
            logs on logs.LogsID = tasks.TasksID 
            Where Status = '${Status}' limit 100`;
        return this.SQLite.all(cmd);
    }
}

module.exports = TasksRepo;