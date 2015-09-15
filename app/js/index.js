'use strict';

var angular = require('angular');

// angular modules
require('./controllers/index');
require('./services/index');
require('./directives/index');


// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'app.controllers',
    'app.services',
    'app.directives'
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  //angular.module('app').constant('AppSettings', require('./constants'));

  angular.bootstrap(document, ['app']);

});