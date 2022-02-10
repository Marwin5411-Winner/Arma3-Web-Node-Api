var express = require('express');
var router = express.Router();
var db = require('../config/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//GET Data From Array
router.get('/test',(req ,res)=>{
  const obj = {"name":"Amit","age":21};
  res.send(obj);
  res.json(obj);
});

router.get('/get/:string',(req,res)=>{
  const string = req.params.string;
  const sql = `INSERT INTO test (post) VALUES ('${string}')`;
  db.query(sql ,(err,result)=>{
    if (err) throw err;
  });
  console.log(string);
});

router.get('/player/:player_uid/:player/:score',(req,res)=>{
  const player_uid = req.params.player_uid;
  const player = req.params.player;
  const score = req.params.score;
  const INSERT = `INSERT INTO hello (player_uid,player_name,score) VALUES ('${player_uid}','${player}','${score}')`;
  const update = `UPDATE hello SET score = '${score}' WHERE player_uid = '${player_uid}'`;
  const select = `SELECT * FROM hello WHERE player_uid = '${player_uid}'`;
  db.query(select,(err,result)=>{
    if (err) throw err;
    if (result.length == 0) {
      db.query(INSERT,(err,result)=>{
        if (err) throw err;
      });
    }
    else {
      db.query(update,(err,result)=>{
        if (err) throw err;
      });
    }
  });
  console.log(player + " " + score + " " + player_uid + " ");
  res.send("Success");
});

module.exports = router;
