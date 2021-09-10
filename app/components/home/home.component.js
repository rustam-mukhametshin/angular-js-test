'use strict';

angular.module('myApp.home')

    .controller('HomeCtrl', function ($scope, $http) {
        var self = $scope;

        self.thead = [
            '#',
            'Username',
            'Email',
            'Phone',
        ];
        $http.get('https://jsonplaceholder.typicode.com/users').then(function (res) {
            self.users = res.data;
        });
    });
