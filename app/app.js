// Code goes here
(function(angular){
  
  var app = angular.module ("app", ['ngRoute','ngResource']).config(function ($routeProvider, $locationProvider){
      $routeProvider.when('/', { templateUrl: 'templates/seasons.html', controller: 'MainController' })
                    .when('/seasons/:year', { templateUrl: 'templates/seasons.html', controller: 'SeasonsController' })
                    .when('/seasons/:year/races', { templateUrl: 'templates/races.html', controller: 'RaceController' })
                    .when('/seasons/:year/standing/teams', { templateUrl: 'templates/teams-standing.html', controller: 'TeamsStandingController' })
                    .when('/seasons/:year/standing/drivers', { templateUrl: 'templates/drivers-standing.html', controller: 'DriversStandingController' })
                    .otherwise({ redirectTo : '/' });
  });
  
}(angular))
