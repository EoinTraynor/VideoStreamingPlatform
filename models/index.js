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
}

// array of streams
var streams = [
	{
		"sessionId": 11,
	    "apiKey": 12,
	    "token": 123,
	    "name": 'stream1',
	    "category": "football",
	    "availability": 0
	},
	{
		"sessionId": 212,
	    "apiKey": 2384238979,
	    "token": 8324453,
	    "name": 'stream2',
	    "category": "football",
	    "availability": 1
	},
	{
		"sessionId": 33,
	    "apiKey": 132048,
	    "token": 132409,
	    "name": 'stream3',
	    "category": "football",
	    "availability": 1
	}
];

module.exports.findAllPublicStreams = function() {
	var result = [];
	for(var s in streams){
		if (streams[s].availability == 1) {
			result.push(streams[s]);
		}
	}
	return result;
}

module.exports.findStreamsByCat = function(cat) {
	var result = [];
	for(var s in streams){
		if (streams[s].category == cat) {
			result.push(streams[s]);
		}
	}
	return result;
}

module.exports.findStreamsByName = function(name) {
	var result = [];
	for(var s in streams){
		if (streams[s].name == name) {
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

module.exports.newStream = function (info) {
	//console.log(info);
	// return data from opentok session creation
	var streamGeneration = opentok.speak();
	// merge the attributes of streamGeneration into info
	for(var att in streamGeneration){
		info[att] = streamGeneration[att];
	}
	// create instance of new stream
	var instance = new stream(info);
	// push to the array of streams
	streams.push(instance);
	return instance;
};

module.exports.deleteStream = function(id) {
	for(var s in streams){
		if (streams[s].sessionId == id) {
			console.log([s] + " " + streams[s].sessionId);
			streams.splice(s, 1);
		}
	}
};

// testing
module.exports.test = function () {
	var hi = opentok.speak();
	console.log(hi);
	//console.log("streamGeneration =" + streamGeneration);
};
