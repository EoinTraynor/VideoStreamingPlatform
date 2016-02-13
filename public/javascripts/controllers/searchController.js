function searchController ($scope, $routeParams, streamFactory) {
	$scope.streams = {};

	searchStreams($routeParams.query);

	// need to pass url:query
	function searchStreams(query) {
		streamFactory.searchStreams($routeParams.query)
		.then(function (data) {
			$scope.streams = data;
		})
		.catch(function (err) {
			$scope.status = err.message;
		});
	};
};

app.controller('searchController', searchController);
