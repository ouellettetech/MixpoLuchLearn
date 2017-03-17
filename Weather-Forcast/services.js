// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "New York, NY";
    
});

weatherApp.service('weatherService', ['$resource', function($resource) {
   
    this.GetWeather = function(city, days) {
        var appID = "1918c6dd5f6a30b480c11210c92db95f"
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=1918c6dd5f6a30b480c11210c92db95f", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
        return weatherResult = weatherAPI.get({ appid: appID, q: city, cnt: days});
    };
    
}]);