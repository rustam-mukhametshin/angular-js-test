'use strict';

angular.module('myApp.create', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/create', {
            templateUrl: 'components/create/create.html',
            controller: 'CreateCtrl'
        });
    }])

    .controller('CreateCtrl', [function () {

    }]);
