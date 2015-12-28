var Stream = function () {
	this.data = {
			sessionId: null,
			apiKey: null,
			token: null,
			name: null,
			catagory: null,
			subCatagory: null,
			private: null
	};

	this.fill = function (info) {
			for(var prop in this.data) {
				if(this.data[prop] !== 'undefined'){
					this.data[prop] = info[prop];
				}
			}
	};

	this.getInformation = function () {
		return this.data;
	};
};

module.exports = function (info) {
	var instance = new Stream();

	instance.fill(info);

	return instance;
};
