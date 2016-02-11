function mainController ($scope, streamFactory) {

	streamFactory.getStreams()
	.then(function (data) {
		$scope.streams = data;
	})
	.catch(function (err) {
		$scope.status = err.message;
	});


	$scope.getStream = function (id) {
		streamFactory.getStream(id)
		.then(function (data) {
			$scope.stream = data;
		})
		.catch(function (err) {
			$scope.status = err.message;
		});

	};

	$scope.getSearch = function (query) {
		streamFactory.getSearch(query)
		.then(function (data) {
			$scope.result = data;
		})
		.catch(function (err) {
			$scope.status = err.message;
		});
	};

	$scope.getCatagory = function (cat) {
		streamFactory.getCatagory(cat)
		.then(function (data) {
			$scope.result = data;
		})
		.catch(function (err) {
			$scope.status = err.message;
		});
	};

	$scope.insertStream = function (strObj) {

	};

	$scope.removeStream = function (id) {
		streamFactory.removeStream(id)
		.then(function(data) {
			$scope.result = data;
		})
		.catch(function(err) {
			$scope.status = err.message;
		});
	};
};

app.controller('mainController', mainController);
