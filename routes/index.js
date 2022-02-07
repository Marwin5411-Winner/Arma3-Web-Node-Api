var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//GET Data From Array
router.get('/demo',(req ,res)=>{
  const obj = {"name":"Amit","age":21};
  res.send(obj);
});

module.exports = router;
