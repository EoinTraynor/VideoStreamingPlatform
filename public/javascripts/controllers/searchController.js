function searchController ($scope, streamFactory) {
	$scope.streams = {};
	console.log('using searchController');
	searchStreams();

	// need to pass url:query
	function searchStreams(query) {
		streamFactory.searchStreams(query)
		.then(function (data) {
			console.log(data);
			$scope.streams = data;
		})
		.catch(function (err) {
			$scope.status = err.message;
		});
	};
};

app.controller('searchController', searchController);
