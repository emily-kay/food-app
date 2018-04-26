var app = angular.module('FoodApp', []);


app.controller('FoodController', ['$http',function($http) { //what is inside of the function ($http in this case) has to be listed before it in the same order 
    var self = this;
    self.newFood = {};
    
    self.displayArray= function(){
        $http({
        method: 'GET',
        url: '/food'
    }).then(function successCallback(response) {
        self.foodArray = response.data;
        
    }).catch(function(response) {
        console.log('error on /food GET', response.status);
        
    })};

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
    
    })};

    self.saveFood = function(foodToSave) {
    //     console.log('write an http request to delete this!', foodToSave);
    //     console.log('Use the _id from mongo!');
        $http({
            method: 'PUT',
            url: '/foodArray',
            data: foodToSave
        }).then(function successCallback(response) {
            console.log('success!!! on /food PUT', response.status);
            self.displayArray();
    
    })};
    
    self.deleteFood = function(foodToDelete) {
    //     console.log('write an http request to save this!', foodToDelete);
    //     console.log('Use the _id from mongo!');
        $http({
            method: 'DELETE',
            url: '/foodArray',
            params: foodToDelete
        }).then(function successCallback(response) {
            console.log('success!!! on /food DELETE', response.status);
            self.displayArray();
            
    })};

    self.displayArray();

}]);
