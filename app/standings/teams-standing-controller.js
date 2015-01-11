(function(angular){
  
  var TeamsStandingController = function ($scope, f1Repository, $routeParams){
      $scope.$parent.year = $routeParams.year;
      $scope.hasData = true;
      f1Repository.getTeamStandings($scope.year).then(function (response) {
          if (response.MRData.StandingsTable.StandingsLists.length > 0)
              $scope.teams = response.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
          else
              $scope.hasData = false;
      });
  }
  
  angular.module("app").controller("TeamsStandingController", TeamsStandingController)
}(angular))