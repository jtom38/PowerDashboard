const fs = require('fs');
const Promise = require('bluebird');
let migration00 = require('./migration00');
let migration01 = require('./migration01');

let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database("./db.sqlite");

function GenerateTables(){
    
    migration00.init(function(err, res){
        if(err) { console.error(err);}
        if(res==true){
            console.log("Tables are generated.");
            /*
            migration01.init(function(err,res){
                if(err) {console.error(err);}
                if(res==true){

                }
            });
            */
        }
    })
}

GenerateTables();