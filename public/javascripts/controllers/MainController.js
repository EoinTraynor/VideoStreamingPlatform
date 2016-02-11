function mainController ($scope, streamFactory) {

	streamFactory.getStreams()
	.then(function (data) {
		$scope.streams = data;
	})
	.catch(function (err) {
		$scope.status = err.message;
	});

	// streamFactory.success(function(data) {
	// 	$scope.streams = data;
	// });
};

app.controller('mainController', mainController);

// use mainController controller here = https://github.com/JosephOR/AngularMovieSearch/blob/master/js/controllers/MovieController.js

// function mainController($scope, streamFactory) {
//
// 	streamFactory.getStreams(function (data) {
// 		$scope.streams = data;
// 	},
// 	function () {
//
// 	});
//
// 	$scope.getStream();
// 	$scope.getSearch();
// 	$scope.getCatagory();
// 	$scope.postStream();
// 	$scope.deleteStream();
// }
//
// app.controller('mainController', mainController);
