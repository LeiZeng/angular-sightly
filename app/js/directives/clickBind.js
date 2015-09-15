'use strict';

var directivesModule = require('./index.js');

/**
 * @ngInject
 */
function clickBind() {

  return {
    restrict: 'EA',
    link: function(scope, element) {
      element.on('click', function() {
        console.log('element clicked');
      });
      // TODO
      // decorate the element
    }
  };

}

directivesModule.directive('clickBind', clickBind);