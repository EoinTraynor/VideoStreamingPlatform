// // opentok setup config
var OpenTok = require('opentok');
var apiKey = 45585712;
var apiSecret = 'a7a30db65bd6ba166b4eca4f5ca1bdced79c3a2b';
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
