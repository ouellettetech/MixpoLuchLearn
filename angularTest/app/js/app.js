var testingAngularApp = angular.module('testingAngularApp', []);

testingAngularApp.controller('testingAngularCtrl', function($rootScope, $scope, $http, $timeout) {
   $scope.title = "Testing Angular JS Applications"; 
    
    $scope.destinations = [];
    
    $scope.apiKey = "1918c6dd5f6a30b480c11210c92db95f";
    $scope.messageWatcher = null;
    
    $scope.newDestination = {
        city: undefined,
        country: undefined
    };
    
    $scope.addDestination = function() {
        $scope.destinations.push(
            {
                city: $scope.newDestination.city,
                country: $scope.newDestination.country
            }
        );
    };
    
    $scope.removeDestination = function (index) {
        $scope.destinations.splice(index, 1);
    }
    
    $scope.getWeather = function(destination) {
        $http.get("http://api.openweathermap.org/data/2.5/weather?q="+ destination.city + "&appid=" + $scope.apiKey).then(
        function successCallback (response) {
            if (response.data.weather) {
                destination.weather = {};
                destination.weather.main = response.data.weather[0].main;
                destination.weather.temp = $scope.convertKelvinToCelsius(response.data.main.temp);
            }
            else {
                $scope.message = "City not found";
            }
        },
        function errorCallback (error) {
            $scope.message = "Server Error";
        });
    };
    
    $scope.convertKelvinToCelsius = function (temp) {
        return Math.round(temp- 273);
    }
    
    $scope.messageWatcher = $scope.$watch('message', function() {
        if($scope.message) {
            $timeout(function() {
                $scope.message = null;
            },3000);
            };
        });
});