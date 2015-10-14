'use strict';

// Imports
window.jQuery = window.$ = require('jquery');
var angular = require('angular');


require('angular-route');

// Application routing and startup
var Router  = require('./router');
var StartUp = require('./startUp');

// Application modules
require('./components/home/home');
require('./components/kendogrid/kendogrid');

// Injection
var app = angular.module('app', [
	'ngRoute',
	'kendo.directives',
	'app.home',
	'app.kendo'
]);

app.config(['$routeProvider', Router]);
app.run(StartUp);