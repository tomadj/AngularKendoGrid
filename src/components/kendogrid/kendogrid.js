'use strict';

// Imports
var angular = require('angular');

//directive grid kendo angular
var GridAngularCtrl  = require('./controllers/gridAngularCtrl');
var GridMovies = require('./directives/gridMovies');
var GridDetailsMovie = require('./directives/gridDetailsMovie');

//directive grid kendo jquey
var GridJqueryCtrl = require('./controllers/gridJqueryCtrl');
var JGridMovies = require('./directives/jGridMovies');

var DataService  = require('./services/dataService');




// Home sub-module definition
var kendoGrid = angular.module('app.kendo', []);
kendoGrid.service('DataService', ['$http',DataService]);
kendoGrid.controller('GridAngularCtrl', ['DataService',GridAngularCtrl]);
kendoGrid.directive('gridMovies', ['DataService',GridMovies]);
kendoGrid.directive('gridDetailsMovie', ['DataService',GridDetailsMovie]);



kendoGrid.controller('GridJqueryCtrl', [GridJqueryCtrl]);
kendoGrid.directive('jgridMovies', ['DataService',JGridMovies]);



module.exports = kendoGrid;