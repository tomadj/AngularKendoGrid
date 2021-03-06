'use strict';


function JGridMovies(dataService) {

        var directive = {

                templateUrl: '/components/kendogrid/directives/jgrid-movies.html',
                restrict: 'E',
                replace: false,
                scope: {
                        title: '='
                },
                link: link
        };
        /**
         * directive view model
         */
        function link($scope, element, attrs) {

                console.log("scope isolated :" + $scope.title)
            
            
                        
                var gridMoviesOptions = {
                        dataSource: new kendo.data.DataSource({
                                transport: {
                                        read: function (options) {
                                                return dataService.getMovies().success(function (results) {
                                                        options.success(results.data);
                                                });
                                        }
                                },
                                schema: {
                                        data: "movies", // records are returned in the "data" field of the response
                                        total: "movie_count", // total number of records is in the "total" field of the response
                        
                                },
                                pageSize: 20,
                                serverPaging: true,
                                serverSorting: true
                        }),
                        sortable: true,
                        pageable: true,
                        columns: [
                                { field: "id", title: "id" },
                                { field: "title", title: "title" }
                        ]

                };
                
                
        }

        return directive;
}

module.exports = JGridMovies;

