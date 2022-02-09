//setup mysql connection and export it
// Language: javascript
// Path: config/db.js
// Compare this snippet from app.js:
var mysql = require('mysql');
var con = mysql.createConnection({
    host     : '43.229.151.97',
    user     : 'arma3',
    password : '*e0V7gn7',
    database : 'arma3'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected Success!");
});

//export this module
module.exports = con;