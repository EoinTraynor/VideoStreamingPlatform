var express = require('express');
var router = express.Router();

var stream = require('../models/index');
//var streams = require('../models/streams');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  //res.json({foo: 'bar'});
});

/* GET a json of all streams */
router.get('/streams', function(req, res){
    console.log('Getting all streams');
    stream.findAllPublicStreams();
});

/* GET a json of strams relating to a specific catagory */
//**
router.get('/streams/catagory/:catagory', function(req, res){
    console.log('Getting streams relating to specific catagory');
    stream.findStreamsByCat();
    res.json({ message: 'Get stream by catagory' });
});

/* GET a list strams relating to a specific search */
router.get('/streams/search/:query', function(req, res){
    console.log('Getting all streams relating to a specific search');
    stream.findStreamsByName();
    res.json({ message: 'Get stream by search' });
});

/* GET a specific stream */
router.get('/streams/:id', function(req, res){
    console.log('Getting all streams by session id');
    stream.findStreamsById();
    res.json({ message: 'Get specific stream!' });
});

/* POST a new stream */
//**
router.post('/streams/:id', function(req, res){
    console.log('Creating a new stream');
    stream.newStream();
    res.json({ message: 'Create new stream!' });
});

/* DELETE a specific stream */
router.delete('/streams/:id', function(req, res){
    console.log('Deleting a specific stream');
    stream.deleteStream();
    res.json({ message: 'Delete specific stream!' });
});

module.exports = router;
