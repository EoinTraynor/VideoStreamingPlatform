var express = require('express');
var router = express.Router();

var stream = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET a json of all public streams */
router.get('/streams', function(req, res){
    res.json(stream.findAllPublicStreams());
});

/* GET a json of strams relating to a specific category */
//**
router.get('/streams/category/:category', function(req, res){
    console.log('Getting streams relating to specific category');
    res.json(stream.findStreamsByCat(req.params.category));    
});

/* GET a list strams relating to a specific search */
router.get('/streams/search/:query', function(req, res){
    console.log('Getting all streams relating to a specific search');
    res.json(stream.findStreamsByName(req.params.query));
});

/* GET a specific stream */
router.get('/streams/:id', function(req, res){
    console.log('Getting stream by session id');
    res.json(stream.findStreamsById(req.params.id));
});

/* POST a new stream */
//**
router.post('/streams', function(req, res){
    console.log('Creating a new stream');
    stream.newStream(req.body, function(instance) {
        res.json(instance);
    });
});

/* PUT to update a stream */
router.put('/streams/:id', function(req, res) {
    console.log(req.params.id);
    stream.updateHostConfirm(req.params.id);
});

/* DELETE a specific stream */
router.delete('/streams/:id', function(req, res){
    console.log('Deleting a specific stream');
    stream.deleteStream(req.params.id);
});

module.exports = router;
