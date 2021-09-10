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
        .otherwise({redirectTo: '/home'});
}]);
