'use strict';


function GridMovies(dataService) {

        var directive = {

                templateUrl: '/components/kendogrid/directives/grid-movies.html',
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

                $scope.gridMoviesOptions = {
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
                                serverPaging: false,
                                serverSorting: false
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

module.exports = GridMovies;

