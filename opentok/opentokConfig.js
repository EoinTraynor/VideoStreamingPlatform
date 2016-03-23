// // opentok setup config
var OpenTok = require('opentok');
var apiKey = 45501232;
var apiSecret = '3eb87aa951206f0d74e12cbe3fb3eb14ea58f38a';
var opentok = new OpenTok(apiKey, apiSecret);

module.exports.speak = function(callback) {
    console.log("OpenTok speak");

    opentok.createSession(function(err, session) {
        var data = {};

        if (err) { callback(err); return; }
        var sessionId = session.sessionId;

        var token = opentok.generateToken(sessionId);

        data.sessionId = sessionId;
        data.apiKey = apiKey;
        data.token = token;
        callback(data);

    });
};
