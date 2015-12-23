var express = require('express');
var router = express.Router();


var stream = require('../stream');

var stream1 = stream({
    name: 'Liverpool'
});

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/stream1', function(req, res){
    res.json(stream1.getInfo());
});



module.exports = router;
