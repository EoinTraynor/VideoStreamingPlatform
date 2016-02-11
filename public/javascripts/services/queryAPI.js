app.factory('streamFactory', ['$http', '$q', function($http, $q) {

	var dataFactory = {};

	dataFactory.getStreams = function () {
		var defer = $q.defer();

		$http.get('/streams').success(function (data) {
			defer.resolve(data);
		})
		.error(function (err) {
			defer.reject(err);
		});

		return defer.promise;
	}

	// return $http.get('/streams')
	// .success(function(data){
	// 	return data;
	// 	console.log(data);
	// })
	// .error(function(err){
	// 	return err;
	// });

	return dataFactory;
}]);


// function streamFactory($scope, $http) {
// 	var getStreams = function (cb, err){
// 		return $http.get('/streams').then(cb, err);
// 	};
// 	return {getStreams: getStreams};
// }
//
// app.factory('streamFactory', streamFactory);
