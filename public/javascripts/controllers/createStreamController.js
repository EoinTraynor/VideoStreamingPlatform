function createStreamController ($scope, $routeParams, streamFactory) {

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
		})
		.catch(function (err) {
			console.log(data);
		});

	};
};

app.controller('createStreamController', createStreamController);
