'use strict';

angular.module('myApp.read', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/read', {
            templateUrl: 'components/read/read.html',
            controller: 'ReadCtrl'
        });
    }])

    .controller('ReadCtrl', [function () {

    }]);
