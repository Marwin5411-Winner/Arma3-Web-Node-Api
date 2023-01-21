var express = require('express');
const { setMaxListeners } = require('../app');
var router = express.Router();
var db = require('../config/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/player/:uid', (req, res, next) => {
    const uid = req.params.uid;
    const select = `SELECT * FROM player WHERE player_uid = '${uid}'`;
    let resultArray = [];
    db.query(select, (err, result) => {
         if (err) {
            console.log(err);
         } else {
           let getfirstresult = result[0];
           for (let prop in getfirstresult) {
            resultArray.push(getfirstresult[prop]);
          }
          res.json(resultArray);
         }
         
    })
})

module.exports = router;
