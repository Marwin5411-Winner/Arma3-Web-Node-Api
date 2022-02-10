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
  const sql = `INSERT INTO hello (player_uid,player_name,score) VALUES ('${player_uid}','${player}','${score}')`;
  db.query(sql ,(err,result)=>{
    if (err) throw err;
  });
  console.log(player + " " + score + " " + player_uid + " ");
  res.send("Success");
});

module.exports = router;
