'use strict';
require('angular');
require('angular-route');
var app = angular.module('gulp.test1', ['ngRoute']);

require('./controllers/index');
require('./controllers/main');
require('./controllers/main1');

app.config(function ($routeProvider) {
    $routeProvider
       .when('/', {
        templateUrl: 'views/index.html',
        controller: 'IndexCtrl',
        controllerAs: 'index'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
       .when('/main1', {
        templateUrl: 'views/main1.html',
        controller: 'Main1Ctrl',
        controllerAs: 'main1'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
