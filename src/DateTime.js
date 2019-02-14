
let dt = new Date();

function GetDateTime(){
    return `${dt.toLocaleDateString()} ${dt.toLocaleTimeString()}`;
}

module.exports = { GetDateTime }