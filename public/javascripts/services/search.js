app.factory('search', ['$http', function($http) {
	return $http.get('/streams')
	.success(function(data){
		return data;
		console.log(data);
	})
	.error(function(err){
		return err;
	});
}]);
