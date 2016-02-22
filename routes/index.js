var express = require('express');
var router = express.Router();

var stream = require('../models/index');
//var opentok = require('../opentok/opentokConfig');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET a json of all public streams */
router.get('/streams', function(req, res){
    res.json(stream.findAllPublicStreams());
});

/* GET a json of strams relating to a specific catagory */
//**
router.get('/streams/catagory/:catagory', function(req, res){
    console.log('Getting streams relating to specific catagory');
    res.json(stream.findStreamsByCat(req.params.catagory));
});

/* GET a list strams relating to a specific search */
router.get('/streams/search/:query', function(req, res){
    console.log('Getting all streams relating to a specific search');
    res.json(stream.findStreamsByName(req.params.query));
});

/* GET a specific stream */
router.get('/streams/:id', function(req, res){
    console.log('Getting all streams by session id');
    res.json(stream.findStreamsById(req.params.id));
});

/* POST a new stream */
//**
router.post('/streams', function(req, res){
    console.log('Creating a new stream');
    res.json(stream.newStream(req.body));
});

/* DELETE a specific stream */
router.delete('/streams/:id', function(req, res){
    console.log('Deleting a specific stream');
    res.json(stream.deleteStream(req.params.id));
});

// !!!!! testing stream
// NO NEED TO TOUCH!!!!
router.get('/testingstream', function(req, res) {
    stream.test();
});

// !!!!! testing stream

module.exports = router;
