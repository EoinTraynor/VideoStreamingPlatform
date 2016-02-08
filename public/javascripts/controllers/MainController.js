app.controller('MainController', ['$scope', 'search',
function($scope, search) {
	search.success(function(data) {
		$scope.streams = data;
	});
}]);
