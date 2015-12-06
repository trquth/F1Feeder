angular.module('F1FeederApp.controllers')
	.controller('driverController', function ($scope, $routeParams, ergastAPIService) {
		$scope.id =$routeParams.id;
		$scope.races =[];
		$scope.driver =null;

		ergastAPIService.getDriverDetails($scope.id).success(function (response) {
			$scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
		});
		ergastAPIService.getDriverRaces($scope.id).success(function (response) {
			$scope.races = response.MRData.RaceTable.Races;
		})

	});

