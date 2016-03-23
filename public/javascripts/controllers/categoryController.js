app.controller('categoryController', categoryController);
function categoryController ($scope, $routeParams, streamFactory) {
	console.log('categoryController');
	$scope.streams = {};

	getCategory($routeParams.category);

	// need to pass url:query
	function getCategory(cat) {
		streamFactory.getCategory($routeParams.category)
		.then(function (data) {
			console.log(data);
			$scope.streams = data;
		})
		.catch(function (err) {
			$scope.status = err.message;
		});
	};
};
