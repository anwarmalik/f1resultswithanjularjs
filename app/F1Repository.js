(function(angular){
  
  var F1Repository = function ($http, $q){
    return {
      getSeasons: function(){
        var deferred = $q.defer();
        $http.get("http://ergast.com/api/f1/seasons.json?limit=40&offset=50").success(deferred.resolve).error(deferred.reject);
        return deferred.promise;
      },
      getRaces: function (season) {
          var deferred = $q.defer();
          $http.get("http://ergast.com/api/f1/"+ season + ".json").success(deferred.resolve).error(deferred.reject);
          return deferred.promise;
      },
      getDriverStandings: function (season) {
          var deferred = $q.defer();
          $http.get("http://ergast.com/api/f1/" + season + "/driverStandings.json").success(deferred.resolve).error(deferred.reject);
          return deferred.promise;
      },
      getTeamStandings: function (season) {
          var deferred = $q.defer();
          $http.get("http://ergast.com/api/f1/" + season + "/constructorStandings.json").success(deferred.resolve).error(deferred.reject);
          return deferred.promise;
      }
        

    }
  }
  
  angular.module("app").factory("f1Repository", F1Repository)
}(angular))