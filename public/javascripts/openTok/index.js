// takes object angular
function opentokConfig(obj) {
    var sessionId = obj.sessionId;
    var apiKey = obj.apiKey;
    var token = obj.token;

    var session;
    var publisher;
    var connectionCount = 0;

    // Replace with the replacement element ID:
    publisher = OT.initPublisher('video-stream');
    publisher.on({
      streamCreated: function (event) {
        console.log("Publisher started streaming.");
      },
      streamDestroyed: function (event) {
        console.log("Publisher stopped streaming. Reason: "
          + event.reason);
      }
    });

    // Replace apiKey and sessionID with your own values:
    session = OT.initSession(apiKey, sessionID);
    // Replace token with your own value:
    session.connect(token, function (error) {
      if (session.capabilities.publish == 1) {
        session.publish(publisher);
      } else {
        console.log("You cannot publish an audio-video stream.");
      }
    });
};

//
//     function connect() {
//         // check if browser does not support WebRTC
//         if (OT.checkSystemRequirements() == 1) {
//             // WebRTC supported; initialise a session
//             var session = OT.initSession(apiKey, sessionId);
//             console.log("session initialised");
//
//             // while the connection is open
//             session.on({
//                 // new client peer connects
//                 connectionCreated: function(event) {
//                     connectionCount++;
//                     console.log(connectionCount + " peers");
//                 },
//                 // client peer disconnects
//                 connectionDestroyed: function(event) {
//                     connectionCount--;
//                     console.log(connectionCount + " peers");
//                 },
//                 // host disconnects
//                 sessionDisconnected: function sessionDisconnectedHandler(event) {
//                     console.log("Disconnected from the Session");
//                     if (event.reason == 'networkDisconnected') {
//                         console.log('You network connection terminated');
//                     }
//                 }
//             });
//
//             // connect to the session
//             session.connect(token, function(err) {
//                 if (err) {
//                     console.log("Error connecting: " + err.message);
//                 }
//                 else {
//                     console.log("Connected to session");
//                     publishStream();
//                 }
//             });
//         }
//
//         // WebRTC not supported
//         else {
//             console.log("WebRTC not supported");
//         }
//
//     }
//
//     connect();
//     function disconnect() {
//         session.disconnect();
//     };
//
//     function publishStream() {
//         var publisher;
//         var targetElement = 'publishContainer';
//
//         // check if host has publish capabilities
//         if (session.capabilities.publish == 1) {
//             // attempt to initialise publish
//             publisher = OT.initPublisher(targetElement, null, function(err) {
//                 if (err) {
//                     // publish unsuccessful
//                     console.log("publish unsuccessful");
//                 }
//                 else {
//                     // publish successful
//                     console.log("publish successful");
//                 }
//             });
//             // Detect result of host cam & mic access
//             publisher.on({
//                 accessAllowed: function(event) {
//                     // user has granted access
//                     console.log("Access to cam & mic");
//                 },
//                 accessDenied: function accessDeniedHandler(event) {
//                     console.log("Access denied");
//                 }
//             });
//         }
//         // client unable to publish
//         else {
//             console.log("client unable to publish");
//         }
//     };
// };
