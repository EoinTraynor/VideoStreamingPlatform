app.factory('searchAll', ['$http', function($http) {
	return $http.get('/streams')
	.success(function(data){
		return data;
		console.log(data);
	})
	.error(function(err){
		return err;
	});
}]);

app.factory('searchOne', ['$http', function ($http) {
	return $http.get('/stream:id')
	.success(function(data) {
			return(data);
			console.log(data);
	})
	.error(function (err) {
		return err;
		console.log(err);
	});
}]);
