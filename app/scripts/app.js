'use strict';

angular.module('myAppApp', ['ngResource'])
  .config(function ($routeProvider, $httpProvider) {

    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
