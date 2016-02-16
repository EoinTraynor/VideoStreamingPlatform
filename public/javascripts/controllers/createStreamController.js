function createStreamController ($scope, $location, streamFactory) {

	$scope.options = ['Football', 'Basketball', 'Tennis'];

	$scope.newStream = function (stream){
		stream.sessionId = 18;
		stream.apiKey = 'dslf2i0';
		stream.token = '3290dcxk';
		console.log(stream);
		console.log(stream.availability);
		streamFactory.insertStream(stream)
		.then(function (data) {
			console.log(data);
			console.log(data.sessionId);
			$location.path("/streams/" + data.sessionId);
		})
		.catch(function (err) {
			console.log(data);
		});

	};
};

app.controller('createStreamController', createStreamController);
