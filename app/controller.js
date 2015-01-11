(function(angular){
  
  var MainController = function ($scope, f1Repository, $routeParams){
    if (!$scope.seasons){
      f1Repository.getSeasons().then(function (response){
        if (!$scope.seasons){
          $scope.seasons= response.MRData.SeasonTable.Seasons.reverse();
        }
      });
    }

    $scope.linkClick = function(year){
        $scope.year = year;
    };
  }

  var SeasonsController = function ($scope, f1Repository, $routeParams) {
      $scope.$parent.year = $routeParams.year;
  }
  
  angular.module("app")
      .controller("MainController", MainController)
  angular.module("app")
      .controller("SeasonsController", SeasonsController)
}(angular))