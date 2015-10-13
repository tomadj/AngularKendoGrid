'use strict';

// Imports
var angular = require('angular');

window.jQuery = window.$ = require('jquery');
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
	'app.home',
	'app.kendo'
]);

app.config(['$routeProvider', Router]);
app.run(StartUp);