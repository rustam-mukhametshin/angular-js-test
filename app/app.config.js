'use strict';


angular
    .module('myApp')
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/delete/:id', {
                templateUrl: 'components/delete/delete.html',
                controller: 'DeleteCtrl'
            })
            .when('/create', {
                templateUrl: 'components/create/create.html',
                controller: 'CreateCtrl'
            })
            .when('/read/:id', {
                templateUrl: 'components/read/read.html',
                controller: 'ReadCtrl'
            })
            .when('/update/:id', {
                templateUrl: 'components/update/update.html',
                controller: 'UpdateCtrl'
            })
            .otherwise({redirectTo: '/home'});
    }]);
