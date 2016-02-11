app.factory('streamFactory', ['$http', '$q', function($http, $q) {
	var urlBase = '/streams'
	var dataFactory = {};

	dataFactory.getStreams = function () {
		var defer = $q.defer();

		$http.get(urlBase)
		.success(function (data) {
			defer.resolve(data);
		})
		.error(function (err) {
			defer.reject(err);
		});

		return defer.promise;
	};

	dataFactory.getStream = function (id){
		var defer = $q.defer();

		$http.get(urlBase + '/' + id)
		.success(function (data) {
			defer.resolve(data);
		})
		.error(function (err) {
			defer.reject(err);
		});

		return defer.promise;
	};

	// dataFactory.getSearch = function functionName() {
	//
	// };
	//
	// dataFactory.getCatagory = function functionName() {
	//
	// };
	//
	// dataFactory.insertStream = function functionName() {
	//
	// };
	//
	// dataFactory.removeStream = function functionName() {
	//
	// };

	return dataFactory;
}]);
