'use strict';

angular.module('myApp.delete', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/delete', {
            templateUrl: 'components/delete/delete.html',
            controller: 'DeleteCtrl'
        });
    }])

    .controller('DeleteCtrl', [function () {

    }]);
