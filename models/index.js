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
var streams = [];

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
