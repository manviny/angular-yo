'use strict';

angular.module('patrimonio24App')
  .directive('spinner', function () {
    return {
      template: 
		'<div ng-show="showSpinner" >' +
      '<div id="mainLoader" >'+
        '<div id="disc" ></div><header><br><h1 class="blink_me">buscando información ...</h1></header>'+
        '<div id="disc2" ></div>'+
      '</div>'+
		'</div>',
      restrict: 'E'
    };
  });
