var express = require('express');
var router = express.Router();

var stream = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  //res.json({foo: 'bar'});
});

/* GET a json of all streams */
router.get('/streams', function(req, res){
    console.log('Getting all streams');
    res.json({ message: 'List of Streams!' });
});

/* GET a json of strams relating to a specific catagory */
//**
router.get('/streams/catagory/:catagory', function(req, res){
    console.log('Getting streams relating to specific catagory');
    res.json({ message: 'Get stream by catagory' });
});

/* GET a list strams relating to a specific search */
router.get('/streams/search/:query', function(req, res){
    console.log('Getting all streams relating to a specific search');
    res.json({ message: 'Get stream by search' });
});

/* GET a specific stream */
router.get('/streams/:id', function(req, res){
    console.log('Getting all streams by session id');
    res.json({ message: 'Get specific stream!' });
});

/* POST a new stream */
//**
router.post('/streams/:id', function(req, res){
    console.log('Creating a new stream');
    res.json({ message: 'Create new stream!' });
    // create new stream & define attributes
    // add stream to array of streams

    stream.setName('Liverpool');
    console.log(stream.getInfo());
    //res.json({ message: 'Create new stream!' });
});

/* DELETE a specific stream */
router.delete('/streams/:id', function(req, res){
    console.log('Deleting a specific stream');
    res.json({ message: 'Delete specific stream!' });
});


module.exports = router;
