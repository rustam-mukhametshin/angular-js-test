'use strict';

angular.module('myApp.update', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/update', {
            templateUrl: 'components/update/update.html',
            controller: 'UpdateCtrl'
        });
    }])

    .controller('UpdateCtrl', [function () {

    }]);
