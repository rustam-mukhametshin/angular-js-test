'use strict';

angular.module('myApp.update')

    .controller('UpdateCtrl', function ($scope, $routeParams, $http, $route) {
        var self = $scope;
        self.disabled = false;
        self.id = $routeParams.id;

        self.user = {};

        $http.get('https://jsonplaceholder.typicode.com/users/' + self.id)
            .then(function (res) {
               self.user = res.data;
            })
            .catch(function (err) {
                self.errorMsg = err;
            })
        ;

        self.submit = function (user) {
            self.disabled = true;

            $http.put('https://jsonplaceholder.typicode.com/users/' + self.id, user)
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
