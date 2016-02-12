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

	dataFactory.searchStreams = function (query){
		var defer = $q.defer();
		$http.get(urlBase + '/search/' + query)
		.success(function (data) {
			console.log(data);
			defer.resolve(data);
		})
		.error(function (err) {
			defer.reject(err);
		});

		return defer.promise;
	};
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
