// define stream model
// specify the data attributes
var Stream = function () {
	this.data = {
			sessionId: null,
			apiKey: null,
			//token: null,
			//name: null,
			//catagory: null,
			//subCatagory: null,
			//private: null
	};

	// confirm all data fields have a defined value
	this.fill = function (info) {
			for(var prop in this.data) {
				if(this.data[prop] !== 'undefined'){
					this.data[prop] = info[prop];
				}
				// else return error
				//res.status(404).json({status:'error'});
			}
	};

	this.getInformation = function () {
		return this.data;
	};
};

// array of streams
var streams = [];

module.exports.findAllPublicStreams = function() {
	console.log("function: findAllPublicStreams");
}

module.exports.findStreamsByCat = function(cat) {
	console.log("function: findStreamsByCat");
}

module.exports.findStreamsByName = function(name) {
	console.log("function: findStreamsByName");
}

module.exports.findStreamsById = function(id) {
	console.log("function: findStreamsById");
}

module.exports.newStream = function (info) {
	var instance = new Stream();
	instance.fill(info);
	return instance;
};

module.exports.deleteStream = function() {
	console.log("function: deleteStream");
}
