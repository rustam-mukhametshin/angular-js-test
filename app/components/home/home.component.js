'use strict';

angular.module('myApp.home')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'components/home/home.html',
            controller: 'HomeCtrl'
        });
    }])

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
