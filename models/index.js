var name, catagory, subCatagory, private, sessionId, apiKey, token;

exports.setName = function(nm){
	name = 'nm';
};
// exports.setCatagory = function(ct){
// 	catagory = ct;
// };
// exports.setSubCatagory = function(sct){
// 	subCatagory = sct;
// };
// exports.setPrivate = function(pri){
// 	private = pri;
// };
// exports.setSessionId = function(sid){
// 	sessionId = sid;
// };
// exports.setApiKey = function(api){
// 	apiKey = api;
// };
// exports.setToken = function(tk){
// 	token = tk;
// };

exports.getInfo = function() {
		return {
			name: name
			// catagory: catagory,
			// subCatagory: subCatagory,
			// private: private,
			// sessionId: sessionId,
			// apiKey: apiKey,
			// token: token
		};
};
