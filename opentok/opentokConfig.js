// // opentok setup config
var OpenTok = require('opentok');
var apiKey = 45501232;
var apiSecret = '3eb87aa951206f0d74e12cbe3fb3eb14ea58f38a';
var opentok = new OpenTok(apiKey, apiSecret);

module.exports.speak = function() {
    console.log("OpenTok speak");

    opentok.createSession(function(err, session) {
        var data = {};

        if (err) throw err;
        var sessionId = session.sessionId;

        var token = opentok.generateToken(sessionId);

        data.sessionId = sessionId;
        data.apiKey = apiKey;
        data.token = token;
        obj(data);
        console.log(data);

    });

    var obj = function(dataObj) {
        console.log("dataObj = "+ dataObj);
        return dataObj;
    };

    return obj;

    //
    // var sessionId = function(arg) {
    //     console.log(arg);
    //     createToken();
    //     return arg;
    // }

    // var token = opentok.generateToken(sessionId);
};
