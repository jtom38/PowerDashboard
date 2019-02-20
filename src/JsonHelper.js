
/*
This is a helper file that currently looks though the json and returns the result.
*/

let scriptsJson = require('../scripts/scripts');

function SearchScriptsJson(title, callback){
    scriptsJson.Scripts.forEach(element => {
      if (element.Name == title){
        // If we find the one we want, return it
        callback(null, element);
      }
    });

    // if we did not find it, return error
    callback(Error(`Unable to find ${title}`));
}

module.exports = {
    SearchScriptsJson
}