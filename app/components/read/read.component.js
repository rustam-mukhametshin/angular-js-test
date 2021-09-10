'use strict';

angular.module('myApp.read')
    .controller('ReadCtrl', function ($scope, $routeParams, $http) {
        var self = $scope;
        var id = $routeParams.id;

        $http.get('https://jsonplaceholder.typicode.com/users/' + id).then(function (res) {
            self.user = res.data;
        });
    });
