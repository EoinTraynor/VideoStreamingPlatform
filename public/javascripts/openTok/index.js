// takes object angular
function opentokConfig(obj) {
    var sessionId = obj.sessionId;
    var apiKey = obj.apiKey;
    var token = obj.token;
    var connectionCount=0;

    // check if browser supports WebRTC
    // WebRTC supported; initialise a session
    var session = OT.initSession(apiKey, sessionId);
    session.on({
        // new client joins the session
        connectionCreated: function(event) {
            connectionCount++;
            streamCount(connectionCount);
            console.log("connectionCount " + connectionCount);
        },
        // client leaves the session
        connectionDestroyed: function connectionDestroyedHandler(event) {
            console.log("client disconnects for stream");
            if (event.reason == "networkDisconnected") {
                console.log("Your network connection terminated");
            }
            connectionCount--;
            streamCount(connectionCount);
            console.log("connectionCount " + connectionCount);
        },
        // cliet subscribes to stream
        streamCreated: function(event) {
            console.log("cliet subscribes to stream");
            session.subscribe(event.stream, 'video-stream', function(err) {
                if (!err) {console.log("New stream"); fixScreen();}
                else {console.log("client failed to read stream");}
            });
        },
        streamDestroyed: function(event) {
            console.log("Stream Destroyed");
        },
        sessionDisconnected: function sessionDisconnectedHandler(event) {
            console.log("Session Disconnected");
            if (event.reason == "networkDisconnected") {
                console.log("networkDisconnected");
            }
        }
    });

    session.connect(token, function(err) {
        if (!err) {
            if (true) {
                var publisherProperties = {resolution: '1280x720'};
                var publisher = OT.initPublisher('video-stream', publisherProperties);
                session.publish(publisher);
                fixScreen();
                console.log("Publishing Stream");
                publisher.on({
                    streamCreated: function(event) {
                        console.log("resolution " + event.stream.videoDimensions.height);
                        // send AJAX request to server to update hostStreamConfirmed
                        hostStreamConfirmed(sessionId);
                    },
                    streamDestroyed: function(event) {
                        console.log("publisher stopped recording");
                        disconnect();
                    }
                });
            }
        }
        else {console.log("Error Connecting");}
    });

    function disconnect() {
        session.disconnect();
    }

};
