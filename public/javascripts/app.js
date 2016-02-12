var app = angular.module('streamApp', ['ngRoute']);

// routes config
app.config(function ($routeProvider) {
	$routeProvider
	// home landing page
	.when('/', {
		controller: 'mainController',
		templateUrl: 'templates/streams.ejs'
	})
	// individual stream
	.when('/streams/:id', {
		controller: 'streamController',
		templateUrl: 'templates/stream.ejs'
	})
	// search of streams relating to 'query'
	.when('/streams/search/:query', {
		controller: 'searchController',
		templateUrl: 'templates/streams.ejs'
	})
	// filter streams based on catagory identifier
	.when('/streams/catagory/:catagory', {
		controller: 'catagoryController',
		templateUrl: 'templates/streams.ejs'
	})
	// posting to
	.when('/streams', {
		controller: 'searchController',
		templateUrl: 'templates/streams.ejs'
	})
	.otherwise({
      redirectTo: '/'
    });
});
