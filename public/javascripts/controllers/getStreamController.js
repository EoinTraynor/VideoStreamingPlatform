function streamController($scope, $routeParams, streamFactory) {
	console.log($routeParams.id);
	$scope.stream = {};

	// routeParams retrieves the current set of route parameters
	getStream($routeParams.id);

	function getStream(id) {
		streamFactory.getStream($routeParams.id)
		.then(function (data) {			
			$scope.stream = data;
		})
		.catch(function (err) {
			$scope.status = err.message;
		});
	};
};

app.controller('streamController', streamController);
