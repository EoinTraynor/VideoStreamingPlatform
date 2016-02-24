// takes object angular
function opentokConfig(obj) {
    var sessionId = obj.sessionId;
    var apiKey = obj.apiKey;
    var token = obj.token;
    var hostIdentified = false;

    var targetElement = 'video-stream';
    var connectionCount = 0;

    var session = OT.initSession(apiKey, sessionId);

    session.on('streamCreated', function(event) {
        session.subscribe(event.stream, 'video-stream');
    });

    session.connect(token, function(err) {
        if (!err) {
            if (hostIdentified) {
                var publisher = OT.initPublisher('video-stream');
                session.publish(publisher);
            }
        }
        else {console.log("Error Connecting");}
    });
    // function connect() {
    //     // check if browser does not support WebRTC
    //     if (OT.checkSystemRequirements() == 1) {
    //         // WebRTC supported; initialise a session
    //         var session = OT.initSession(apiKey, sessionId);
    //         console.log("session initialised");
    //
    //         // while the connection is open
    //         session.on({
    //             // new client peer connects
    //             connectionCreated: function(event) {
    //                 session.subscribe(event.stream, targetElement, function(err) {
    //                     if (err) {console.log(err);}
    //                     else { console.log("Subscriber added");}
    //                 });
    //                 connectionCount++;
    //                 console.log(connectionCount + " peers");
    //             },
    //             // client peer disconnects
    //             connectionDestroyed: function(event) {
    //                 connectionCount--;
    //                 console.log(connectionCount + " peers");
    //             },
    //             // host disconnects
    //             sessionDisconnected: function sessionDisconnectedHandler(event) {
    //                 console.log("Disconnected from the Session");
    //                 if (event.reason == 'networkDisconnected') {
    //                     console.log('You network connection terminated');
    //                 }
    //             }
    //         });
    //
    //         // connect to the session
    //         session.connect(token, function(err) {
    //             if (err) { console.log("Error connecting: " + err.message);}
    //             else {
    //                 console.log("Connected to session");
    //                 if (hostIdentified) {
    //                     console.log("Host already Identified");
    //                 }
    //                 else {
    //                     console.log("establishing host");
    //                     publishStream(session);
    //                 }
    //             }
    //         });
    //
    //     }
    //
    //     // WebRTC not supported
    //     else {console.log("WebRTC not supported");}
    //
    // }
    //
    // function publishStream(session) {
    //     var publisher;
    //
    //     // check if host has publish capabilities
    //     if (session.capabilities.publish == 1) {
    //         // attempt to initialise publish
    //         publisher = OT.initPublisher(targetElement, null, function(err) {
    //             if (err) {
    //                 // publish unsuccessful
    //                 console.log("publish unsuccessful");
    //             }
    //             else {
    //                 // publish successful
    //                 console.log("publish successful");
    //             }
    //         });
    //         // Detect result of host cam & mic access
    //         publisher.on({
    //             accessAllowed: function(event) {
    //                 // user has granted access
    //                 console.log("Access to cam & mic");
    //             },
    //             accessDenied: function accessDeniedHandler(event) {
    //                 console.log("Access denied");
    //             }
    //         });
    //     }
    //     // client unable to publish
    //     else {console.log("client unable to publish");}
    // };
    //
    // function disconnect() {
    //     session.disconnect();
    // };
    // connect();

};
