'use strict';
require('angular');
require('angular-route');
var app = angular.module('gulp.test1', ['ngRoute']);

require('./controllers/controller1');
require('./controllers/controller2');
require('./controllers/controller3');

app.config(function ($routeProvider) {
    $routeProvider
       .when('/', {
        templateUrl: 'views/controller1.html',
        controller: 'controller1',
        controllerAs: 'controller1'
      })
      .when('/1', {
        templateUrl: 'views/controller2.html',
        controller: 'controller2',
        controllerAs: 'controller2'
      })
       .when('/2', {
        templateUrl: 'views/controller3.html',
        controller: 'controller3',
        controllerAs: 'controller3'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
