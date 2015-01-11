(function(angular){
  
  var DriversStandingController = function ($scope, f1Repository, $routeParams){
      $scope.$parent.year = $routeParams.year;

      f1Repository.getDriverStandings($scope.year).then(function (response) {
          if (response.MRData.StandingsTable.StandingsLists.length > 0)
              $scope.drivers = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      });
  }
  
  angular.module("app").controller("DriversStandingController", DriversStandingController)
}(angular))