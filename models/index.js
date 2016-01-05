// define stream model
// specify the data attributes
function stream(info) {
	this.sessionId = info.sessionId;
	this.apiKey = info.apiKey;
	this.token = info.token;
	this.name = info.name;
	this.catagory = info.catagory;
	this.subCatagory = info.subCatagory;
	this.private = info.private;
}

// array of streams
var streams = [
	{
		"sessionId": 11,
	    "apiKey": 12,
	    "token": 123,
	    "name": 'stream1',
	    "catagory": "football",
	    "subCatagory": "sport",
	    "private": "false"
	},
	{
		"sessionId": 33,
	    "apiKey": 132048,
	    "token": 132409,
	    "name": 'stream2',
	    "catagory": "football",
	    "subCatagory": "sport",
	    "private": "false"
	}
];

module.exports.findAllPublicStreams = function() {
	var result = [];
	for(var s in streams){
		if (streams[s].private == "false") {
			result.push(streams[s]);
		}
	}
	return result;
}

module.exports.findStreamsByCat = function(cat) {
	var result = [];
	for(var s in streams){
		if (streams[s].catagory == cat) {
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
	var instance = new stream(info);
	streams.push(instance);
	return instance;
};

module.exports.deleteStream = function(id) {
	for(var s in streams){
		if (streams[s].sessionId == id) {
			//result.push(streams[s]);
			streams.splice(streams[s]);
		}
	}
}
