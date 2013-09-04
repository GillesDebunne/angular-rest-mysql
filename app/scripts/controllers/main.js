'use strict';

angular.module('myAppApp').controller('MainCtrl', function ($scope, $resource) {
	var Wines = $resource('http://localhost/~debunne/WineREST/index.php/wines');
	$scope.wineObject = Wines.get();
});
