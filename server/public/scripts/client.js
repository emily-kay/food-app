console.log('client.js is working');

var app = angular.module('FoodApp', []);

app.controller('FoodController', function($http) {
    var self = this;
    self.message = 'Apples Pears Potato';
    $http({
        method: 'GET',
        url: '/food'
    }).then(function successCallback(response) {
        console.log(response.data);
        
    }, function errorCallback(response) {
        console.log(response.status);
        
    });
});
