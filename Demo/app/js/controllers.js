'use strict';
/* Controllers */
angular.module('myApp.controllers', [])
        .controller('Area1Ctrl', ['$scope', 'objectManager', function($scope, objectManager) {
                  $scope.areaObjects = objectManager.getList1();
                  $scope.DropInComplete = function(data, evt) {
                       objectManager.addObjectToList1(data);
                  };
                  $scope.DragAwaySuccess = function(data, evt) {
                       objectManager.removeObjectFromList1(data);
                  };
             }])
        .controller('Area2Ctrl', ['$scope', 'objectManager', function($scope, objectManager) {
                  $scope.areaObjects = objectManager.getList2();
                  $scope.DropInComplete = function(data, evt) {
                       objectManager.addObjectToList2(data);
                  };
                  $scope.DragAwaySuccess = function(data, evt) {
                       objectManager.removeObjectFromList2(data);
                  };
             }])
        .controller('Area3Ctrl', ['$scope', 'objectManager', function($scope, objectManager) {
                  $scope.areaObjects = objectManager.getList3();
                  $scope.DropInComplete = function(data, evt) {
                       objectManager.addObjectToList3(data);
                  };
                  $scope.DragAwaySuccess = function(data, evt) {
                       objectManager.removeObjectFromList3(data);
                  };
             }])
        .controller('Area4Ctrl', ['$scope', 'objectManager', function($scope, objectManager) {
                  $scope.areaObjects = objectManager.getList4();
                  $scope.DropInComplete = function(data, evt) {
                       objectManager.addObjectToList4(data);
                  };
                  $scope.DragAwaySuccess = function(data, evt) {
                       objectManager.removeObjectFromList4(data);
                  };
             }])
        .controller('MyCtrl1', ['$scope', function($scope) {

             }])
        .controller('MyCtrl2', ['$scope', function($scope) {

             }]);
