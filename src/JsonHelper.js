
/*
This is a helper file that currently looks though the json and returns the result.
*/
let Promise = require('bluebird');
let scriptsJson = require('../scripts/scripts');

/*
function SearchScriptsJson(title, callback){
  scriptsJson.Scripts.forEach(element => {
    if (element.Name == title){
      // If we find the one we want, return it
      callback(null, element);
    }
  });
}
*/

function SearchScriptsJson(title){
  return new Promise( (resolve, reject) => {

    let returnData;
    scriptsJson.Scripts.forEach(element => {
      if(element.Name == title){
        returnData = element;
      }
    });
    
    if (returnData == undefined) {
      return reject(Error("Unable to find the requested element"));
    }else{
      return resolve(returnData);
    }

  });

}

module.exports = {
    SearchScriptsJson
}