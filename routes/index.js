var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//GET Data From Array
router.get('/test',(req ,res)=>{
  const obj = {"name":"Amit","age":21};
  res.send(obj);
});

router.post('/post/:string',(req,res)=>{
  const string = req.params.string;
  console.log(string);
});

module.exports = router;
