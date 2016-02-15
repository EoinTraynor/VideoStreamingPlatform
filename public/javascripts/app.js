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
	// display create stream form
	.when('/createstream', {
		templateUrl: 'templates/createStream.ejs'
	})
	// send POST request to create new stream
	.when('/createstream/:obj', {
		controller: 'createStreamController',
		templateUrl: 'templates/createStream.ejs'
		//redirectTo: 'templates/stream.ejs'
	})
	.otherwise({
      redirectTo: '/'
    });
});
