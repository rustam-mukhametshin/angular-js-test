'use strict';

angular.module('myApp.create')

    .controller('CreateCtrl', function ($scope, $routeParams, $http, $route) {
        var self = $scope;
        self.disabled = false;

        self.user = {};

        self.submit = function (user) {
            self.disabled = true;

            $http.post('https://jsonplaceholder.typicode.com/users/', user)
                .then(function (res) {
                    self.successMsg = res;
                })
                .catch(function (err) {
                    self.errorMsg = err;
                })
                .finally(function () {
                    self.disabled = false;
                })
            ;
        };

        self.reset = function () {
            self.user = {};
        };

        self.reset();
    });
