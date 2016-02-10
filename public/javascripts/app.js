var app = angular.module('streamApp', ['ngRoute']);

// routes config
app.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'mainController',
		templateUrl: 'templates/streams.ejs'
	})
	.when('/stream/:id', {
		controller: 'streamController',
		templateUrl: 'templates/stream.ejs'
	})
	.otherwise({
      redirectTo: '/'
    });
});
