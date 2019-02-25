var Promise = require('bluebird');
var SQLite = require('./sqlite/SQLite');
var TasksRepo = require('./sqlite/TasksRepo');
let JsonHelper = require('./JsonHelper');
let EventHandler = require('./EventHandler');
//let scriptsJson = require('../scripts/scripts');

let sqlite = new SQLite('./db.sqlite');
let tasksTable = new TasksRepo(sqlite);

async function CheckQueue() {    
    let pending = await tasksTable.GetAllStatus('Pending');
    pending.forEach(element => {
        let Name = element.Name;
        let idk;
        idk = await JsonHelper.PromiseGetScriptRecord(Name)
                 
        //console.log(res);

        //console.log(element);

        //let ArgsArray = ParseArgs(element.Param, res.param);
        //console.log(jsonRow);
        
    });
}

/*
    Args = Active args that are requested for this command.
    ScriptParam = This is the information that we check to know what each type is for the var
*/
function ParseArgs(Args, ScriptParam ){
    return new Promise((resolve, reject) => {
        Args = JSON.parse(Args)
        let ArgsArray = [];
        let a = Object.keys(Args);
        a.forEach(key =>{

            GetArgsType(key, ScriptParam).then((ArgType)=>{
                console.log(ArgType);
            })

            console.log(keyType);
            if(Args[key] != ""){
                let s = ` -${key} ${Args[key]}`;
                ArgsArray.push(s);
            }
        });
        resolve(ArgsArray);
    })
}

function GetArgsType(ParamName, ParamInfo){
    return new Promise( (resolve, reject) => {
        let type
        ParamInfo.forEach(key => {
            if( key.Name == ParamName){
                type = key.ParamType;                
            }
        });

        if(type == undefined) {
            reject(Error("Unable to find param type"));
        }else{
            resolve(type);
        }
    });
}

module.exports = { CheckQueue }