function createStreamController ($scope, $location, streamFactory) {

	$scope.options = ['Football', 'Basketball', 'Tennis'];

	$scope.newStream = function (stream){
		streamFactory.insertStream(stream)
		.then(function (data) {
			$location.path("/streams/" + data.sessionId);
		})
		.catch(function (err) {
			$scope.status = err.message;
		});

	};
};

app.controller('createStreamController', createStreamController);
