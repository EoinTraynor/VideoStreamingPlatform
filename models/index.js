var opentok = require('../opentok/opentokConfig');

// define stream model
// specify the data attributes
function stream(info) {
	this.sessionId = info.sessionId;
	this.apiKey = info.apiKey;
	this.token = info.token;
	this.name = info.name;
	this.category = info.category;
	this.availability = info.availability;
	this.hostConfirmed = false;
}

// array of streams
var streams = [
	{
 		"sessionId": 11,
 	    "apiKey": 12,
 	    "token": 123,
 	    "name": 'Liverpool vs Barcelona',
 	    "category": "Football",
 		"hostConfirmed": true,
 	    "availability": 1
 	},
 	{
 		"sessionId": 212,
 	    "apiKey": 2384238979,
	    "token": 8324453,
 	    "name": 'Chelsea vs Arsenal',
 	    "category": "Football",
 		"hostConfirmed": true,
 	    "availability": 1
 	},
	{
 		"sessionId": 33,
 	    "apiKey": 132048,
 	    "token": 132409,
 	    "name": 'LA Lakers vs Chicago Bulls',
 	    "category": "Basketball",
 		"hostConfirmed": true,
 	    "availability": 1
 	},
	{
 		"sessionId": 33,
 	    "apiKey": 132048,
 	    "token": 132409,
 	    "name": 'Ireland vs Italy',
 	    "category": "Rugby",
 		"hostConfirmed": true,
 	    "availability": 1
 	}
];

module.exports.findAllPublicStreams = function() {
	var result = [];
	for(var s in streams){
		if (streams[s].availability == 1 && streams[s].hostConfirmed == true) {
			result.push(streams[s]);
		}
	}
	return result;
}

module.exports.findStreamsByCat = function(cat) {
	var result = [];
	for(var s in streams){
		if (streams[s].availability == 1 && streams[s].hostConfirmed == true && streams[s].category == cat) {
			result.push(streams[s]);
		}
	}
	return result;
}

module.exports.findStreamsByName = function(name) {
	var result = [];
	for(var s in streams){
		if (streams[s].availability == 1 && streams[s].hostConfirmed == true && streams[s].name == name) {
			result.push(streams[s]);
		}
	}
	return result;
}

module.exports.findStreamsById = function(id) {
	var result = [];
	for(var s in streams){
		if (streams[s].sessionId == id) {
			result.push(streams[s]);
		}
	}
	return result;
}

module.exports.newStream = function (info, callback) {
	//console.log(info);
	// return data from opentok session creation
	opentok.speak(function(streamGeneration) {
		// merge the attributes of streamGeneration into info
		for(var att in streamGeneration){
			info[att] = streamGeneration[att];
		}
		// create instance of new stream
		var instance = new stream(info);
		// push to the array of streams
		streams.push(instance);
		callback(instance);
	});
};

module.exports.deleteStream = function(id) {
	for(var s in streams){
		if (streams[s].sessionId == id) {
			console.log([s] + " " + streams[s].sessionId);
			streams.splice(s, 1);
		}
	}
};

// update host streaming confirmation
module.exports.updateHostConfirm = function (id) {
	for(var s in streams){
		if (streams[s].sessionId == id) {
			streams[s].hostConfirmed = true;
		}
	}
};
