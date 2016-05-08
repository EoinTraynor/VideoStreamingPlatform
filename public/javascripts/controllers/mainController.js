function mainController ($scope, streamFactory) {

	streamFactory.getStreams()
	.then(function (data) {
		$scope.streams = data;
	})
	.catch(function (err) {
		$scope.status = err.message;
	});
};
app.controller('mainController', mainController);
