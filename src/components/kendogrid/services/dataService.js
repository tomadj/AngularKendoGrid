'use strict';

var _$http;

// DataService class
function DataService ($http) {
	
	_$http = $http;
}

DataService.prototype.getMovies = function(){
	var url = 'https://yts.to/api/v2/list_movies.json';	
	return _$http.get(url, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
};

DataService.prototype.getDetailsMovie = function(movie_id){
	var url = 'https://yts.to/api/v2/movie_comments.json?movie_id='+movie_id;	
	return _$http.get(url, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
};

module.exports = DataService;