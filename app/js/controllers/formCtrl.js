'use strict';

var controllersModule = require('./index');

/**
 * @ngInject
 */
function FormCtrl($scope, $element, FormServices) {
  // ViewModel
  var vm = $scope.vm = {};

  vm.title = 'AngularJS, Gulp, and Browserify!';

  var $fields = FormServices.getFormFields($element);

  console.log($fields);
  //  TODO
  //  deal with the fields
}

controllersModule.controller('FormCtrl', FormCtrl);