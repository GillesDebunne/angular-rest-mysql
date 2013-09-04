'use strict';

angular.module('myAppApp').controller('MainCtrl', function ($scope) {
    $scope.wines = [ {name:'Red'}, {name:'White'}, {name:'Rosé'} ];
});
