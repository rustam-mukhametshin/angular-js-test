'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'components/home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', function ($scope) {
        $scope.thead = [
            '#',
            'First',
            'Last',
            'Handle',
            '',
        ];

        $scope.users = [
            {
                id: 1,
                first: 'Mark',
                last: 'Otto',
                handle: 'mdo'
            },
            {
                id: 2,
                first: 'Jacob',
                last: 'Thornton',
                handle: 'fat'
            },
            {
                id: 3,
                first: 'Larry',
                last: 'the Bird',
                handle: 'twitter'
            }
        ];
    });
