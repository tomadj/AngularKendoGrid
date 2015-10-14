'use strict';


function GridDetailsMovie(dataService) {

        var directive = {

                templateUrl: '/components/kendogrid/directives/grid-details-movie.html',
                restrict: 'E',
                replace: false,
                scope: {
                        idMovie: '='
                },
                link: link
        };
        /**
         * directive view model
         */
        function link($scope, element, attrs) {

                console.log("id movie :" + $scope.idMovie);

                $scope.gridDetailsMovieOptions = {
                        dataSource: new kendo.data.DataSource({
                                transport: {
                                        read: function (options) {
                                                return dataService.getDetailsMovie($scope.idMovie).success(function (results) {
                                                        options.success(results.data);
                                                });
                                        }
                                },
                                schema: {
                                        data: "comments", // records are returned in the "data" field of the response
                                        total: "comment_count", // total number of records is in the "total" field of the response
                                
                                },
                                serverPaging: true,
                                serverSorting: true
                        }),
                        sortable: true,
                        pageable: true,
                        columns: [
                                { field: "username", title: "User" },
                                { field: "comment_text", title: "Commentaire" },
                                { field: "date_added", title: "Date" }

                        ]
                };


        }

        return directive;
}

module.exports = GridDetailsMovie;

