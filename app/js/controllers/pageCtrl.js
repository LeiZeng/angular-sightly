'use strict';

var controllersModule = require('./index');

/**
 * @ngInject
 */
function PageCtrl($scope) {

  // ViewModel
  var vm = $scope.vm = {};

  vm.title = 'AngularJS, Gulp, and Browserify!';
  vm.number = 1234;
}

controllersModule.controller('PageCtrl', PageCtrl);