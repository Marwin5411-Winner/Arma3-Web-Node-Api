//setup mysql connection and export it
// Language: javascript
// Path: config/db.js
// Compare this snippet from app.js:
var mysql = require('mysql');
var con = mysql.createConnection({
    host     : 'localhost',
    user     : 'snowdev',
    password : '!Home4301',
    database : 'uao'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected Success!");
});

//export this module
module.exports = con;
