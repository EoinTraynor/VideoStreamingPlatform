app.controller('mainController', ['$scope', 'search',
function($scope, search) {
	search.success(function(data) {
		$scope.streams = data;
	});
}]);
