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

module.exports = router;
