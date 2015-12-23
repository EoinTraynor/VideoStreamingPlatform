// var sessionId, apiKey, token, name, catagory, subCatagory, private;
//
// exports.setSessionId = function(sid){
// 	sessionId = sid;
// };
// exports.setApiKey = function(api){
// 	apiKey = api;
// };
// exports.setToken = function(tk){
// 	token = tk;
// };
// exports.setName = function(nm){
// 	name = nm;
// };
// exports.setCatagory = function(ct){
// 	catagory = ct;
// };
// exports.setSubCatagory = function(sct){
// 	subCatagory = sct;
// };
// exports.setPrivate = function(pri){
// 	private = pri;
// };
//
// exports.getInfo = function() {
// 		return {
// 			sessionId: sessionId,
// 			apiKey: apiKey,
// 			token: token,
// 			name: name,
// 			catagory: catagory,
// 			subCatagory: subCatagory,
// 			private: private
// 		};
// };

module.exports = function (info) {
	var values = {
			sessionId: null,
			apiKey: null,
			token: null,
			name: null,
			catagory: null,
			subCatagory: null,
			private: null
	};

	for(var prop in values){
		if(values[prop] !== 'undefined'){
			values[prop] = info[prop];
		}
	}
}
