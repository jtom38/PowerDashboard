
/*
This is a helper file that currently looks though the json and returns the result.
*/
let Promise = require('bluebird');
let scriptsJson = require('../scripts/scripts');

function PromiseGetScriptRecord(Title){
  return new Promise((resolve, reject) =>{
    CallBackGetScriptRecord(Title, function (err, res) {
      if(err){
        reject(err);
      }else{
        resolve(res);
      }
    })
  });
}

function CallBackGetScriptRecord(Title, callback) {
  let returnData;
  scriptsJson.Scripts.forEach(element => {
    if(element.Name == Title){
      returnData = element;
    }
  });
  
  if (returnData == undefined) {
    return callback(Error("Unable to find the requested element"));
  }else{
    return callback(null, returnData);
  }
}

module.exports = {
  PromiseGetScriptRecord,
  CallBackGetScriptRecord
}