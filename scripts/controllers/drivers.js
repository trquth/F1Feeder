angular.module('F1FeederApp.controllers')
	.controller('driversController',function($scope,ergastAPIService){
	$scope.nameFilter=null;
	$scope.driversList=[];
		ergastAPIService.getDrivers().success(function (response) {
			$scope.driversList =response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
		});
	$scope.searchFilter = function (driver) {
		var re = new RegExp($scope.nameFilter,'i');
		return !$scope.nameFilter|| re.test(driver.Driver.giveName)|| re.test(driver.Driver.familyName);
	};

});
