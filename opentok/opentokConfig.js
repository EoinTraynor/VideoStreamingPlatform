// // opentok setup config
var OpenTok = require('opentok');
var apiKey = 45501232;
var apiSecret = '3eb87aa951206f0d74e12cbe3fb3eb14ea58f38a';
var opentok = new OpenTok(apiKey, apiSecret);

module.exports.createSession = function() {
    console.log('createSession opentok');
    opentok.createSession(function(err, session) {
        if (err) throw err;
        var data = {};
        data.set('sessionId', session.sessionId);
        console.log(data);
    });
};

module.exports.speak = function() {
    var data = [];
    data.push('sessionId', 234324);
    console.log(data);
};
