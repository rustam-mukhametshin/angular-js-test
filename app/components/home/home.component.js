'use strict';

angular.module('myApp.home')

    .controller('HomeCtrl', function ($scope, $http) {
        var self = $scope;

        $http.get('https://jsonplaceholder.typicode.com/users').then(function (res) {
            self.users = res.data;

            self.currentPage = 1;
            self.itemsPerPage = 2;

            self.thead = [
                '#',
                'Username',
                'Email',
                'Phone',
            ];

            self.beforeDisable = function () {
                return self.currentPage === 1;
            };
            self.nextDisable = function () {
                return self.currentPage === self.totalPages;
            };

            self.before = function () {
                self.currentPage--;
            };

            self.next = function () {
                self.currentPage++;
            };


            self.totalPages = self.users.length / self.itemsPerPage;

            self.beforeDisable();
            self.nextDisable();
        });
    });
