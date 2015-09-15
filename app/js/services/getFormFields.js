'use strict';

var angular = require('angular');
var servicesModule = require('./index.js');

function FormServices() {
  this.getFormFields = function($form) {
    var $fields = angular.element();

    mergeFields($fields, $form.find('input'));
    mergeFields($fields, $form.find('checkbox'));
    mergeFields($fields, $form.find('select'));
    return $fields;
  }
}

function mergeFields($fields, find) {
  for(var i = 0; i < find.length; i++) {
    $fields.push(find[i])
  }
}

servicesModule.service('FormServices', FormServices);