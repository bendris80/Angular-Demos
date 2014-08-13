'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
            $scope.draggableObjects = [{name:'Drag A Box',index:'one'}, {name:'Drag A Box',index:'two'}, {name:'Drag A Box',index:'three'}];
        $scope.droppedObjects1 = [];
        $scope.droppedObjects2= [];
        $scope.onDropComplete1=function(data,evt){
            var index = $scope.droppedObjects1.indexOf(data);
            if (index === -1)
            $scope.droppedObjects1.push(data);
        };
        $scope.onDragSuccess1=function(data,evt){
            var index = $scope.droppedObjects1.indexOf(data);
            if (index > -1) {
                $scope.droppedObjects1.splice(index, 1);
            }
        };
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
