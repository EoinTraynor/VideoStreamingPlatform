function createStreamController ($scope, $routeParams, streamFactory) {
	console.log('createStreamController');
	console.log($routeParams);
	$scope.stream = {};

	searchStreams($routeParams.query);

	// need to pass url:query
	function searchStreams(query) {
		streamFactory.searchStreams($routeParams.query)
		.then(function (data) {
			$scope.stream = data;
		})
		.catch(function (err) {
			$scope.status = err.message;
		});
	};




};

app.controller('createStreamController', createStreamController);
