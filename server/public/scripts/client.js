console.log('client.js is working');

var app = angular.module('FoodApp', []);


app.controller('FoodController', ['$http',function($http) { //what is inside of the function ($http in this case) has to be listed before it in the same order 
    var self = this;
    self.newFood = {};
    self.message = 'Apples Pears Potato';
    
    self.displayArray= function(){
        $http({
        method: 'GET',
        url: '/food'
    }).then(function successCallback(response) {
        self.foodArray = response.data;
        
    }).catch(function(error) {
        console.log('error on /food GET', response.status);
        
    })}

    self.createFood = function(){
        $http({
        method: 'POST',
        url: '/foodArray',
        data: self.newFood
    }).then(function successCallback(response) {
        console.log('success!!! on /food POST', response.status);
        self.displayArray();
            
    }).catch(function(error) {
        console.log('error on /food POST', error.status);
        
    })}
    
}]);
