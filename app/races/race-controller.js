(function(angular){
  
  var RaceController = function ($scope, f1Repository, $routeParams){
      $scope.$parent.year = $routeParams.year;

      f1Repository.getRaces($scope.year).then(function (response) {
          $scope.races = response.MRData.RaceTable.Races;
      });

  }
  
  angular.module("app").controller("RaceController", RaceController)
}(angular))