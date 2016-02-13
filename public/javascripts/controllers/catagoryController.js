function catagoryController ($scope, $routeParams, streamFactory) {
	console.log('catagoryController');
	$scope.streams = {};

	getCatagory($routeParams.catagory);

	// need to pass url:query
	function getCatagory(cat) {
		streamFactory.getCatagory($routeParams.catagory)
		.then(function (data) {
			console.log(data);
			$scope.streams = data;
		})
		.catch(function (err) {
			$scope.status = err.message;
		});
	};
};

app.controller('catagoryController', catagoryController);
