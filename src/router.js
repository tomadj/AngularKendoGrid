'use strict';

// Router class
function Router($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl: '/components/home/controllers/home.html'
	})

	.when('/welcome', {
		templateUrl: '/components/home/controllers/welcome.html'
	})
	
		.when('/angular', {
		templateUrl: '/components/kendogrid/controllers/grid-angular.html'
	})
	
		.when('/jquery', {
		templateUrl: '/components/kendogrid/controllers/grid-jquery.html'
	})

	.otherwise({ redirectTo: '/' });
}

module.exports = Router;