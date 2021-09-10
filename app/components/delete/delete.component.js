'use strict';

angular.module('myApp.delete')
    .controller('DeleteCtrl', function ($scope, $routeParams, $http) {
        var self = $scope;
        self.id = $routeParams.id;
        self.successMsg = '';

        $http.delete('https://jsonplaceholder.typicode.com/users/' + self.id).then(function (res) {
            self.successMsg = res;
        });
    });
