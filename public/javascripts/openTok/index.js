// takes object angular
function opentokConfig(obj) {
    var sessionId = obj.sessionId;
    var apiKey = obj.apiKey;
    var token = obj.token;
    var connectionCount = 0;

    function connect() {
        // check if browser does not support WebRTC
        if (OT.checkSystemRequirements() == 1) {
            // WebRTC supported; initialise a session
            var session = OT.initSession(apiKey, sessionId);
            console.log("session initialised");

            // while the connection is open
            session.on({
                // new client peer connects
                connectionCreated: function(event) {
                    connectionCount++;
                    console.log(connectionCount + " peers");
                },
                // client peer disconnects
                connectionDestroyed: function(event) {
                    connectionCount--;
                    console.log(connectionCount + " peers");
                },
                // host disconnects
                sessionDisconnected: function sessionDisconnectedHandler(event) {
                    console.log("Disconnected from the Session");
                    if (event.reason == 'networkDisconnected') {
                        console.log('You network connection terminated');
                    }
                }
            });

            // connect to the session
            session.connect(token, function(err) {
                if (err) {
                    console.log("Error connecting: " + err.message);
                }
                else {
                    console.log("Connected to session");
                }
            });
        }

        // WebRTC not supported
        else {
            console.log("WebRTC not supported");
        }

    }

    connect();
    function disconnect() {
        session.disconnect();
    }
}
