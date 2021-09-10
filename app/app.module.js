'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.home',
    'myApp.update',
    'myApp.delete',
    'myApp.create',
    'myApp.read',
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
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
