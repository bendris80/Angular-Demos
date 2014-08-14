'use strict';

/* Services */
angular.module('myApp.providers', [])
        .provider('objectList', function(){
             var _masterList = [
                       {name: 'Drag A Box', index: 'A Zero'},
                       {name: 'Drag A Box', index: 'A One'},
                       {name: 'Drag A Box', index: 'A Three'},
                       {name: 'Drag A Box', index: 'A Four'}];
             return {
                  $get: function () {
                       return _masterList;
                  }
             };
        });

