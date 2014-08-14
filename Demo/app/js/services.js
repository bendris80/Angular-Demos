'use strict';

/* Services */
angular.module('myApp.services', []).
        value('version', '0.1')
        .factory('objectManager',['objectList', function(objectList) {
             var _objectList1 = objectList;
             var _objectList2 = [];
             var _objectList3 = [];
             var _objectList4 = [];
             var objectManager = {
                  getList1: function() {
                       return _objectList1;
                  },
                  addObjectToList1: function(obj) {
                       var index = _objectList2.indexOf(obj);
                       if (index === -1)
                            _objectList1.push(obj);
                  },
                  removeObjectFromList1: function(obj) {
                       var index = _objectList1.indexOf(obj);
                       if (index > -1) {
                            _objectList1.splice(index, 1);
                       }
                  },
                  getList2: function() {
                       return _objectList2;
                  },
                  addObjectToList2: function(obj) {
                       var index = _objectList2.indexOf(obj);
                       if (index === -1)
                            _objectList2.push(obj);
                  },
                  removeObjectFromList2: function(obj) {
                       var index = _objectList2.indexOf(obj);
                       if (index > -1) {
                            _objectList2.splice(index, 1);
                       }
                  },
                  findObject2: function() {
                  },
                  getList3: function() {
                       return _objectList3;
                  },
                  addObjectToList3: function(obj) {
                       var index = _objectList3.indexOf(obj);
                       if (index === -1)
                            _objectList3.push(obj);
                  },
                  removeObjectFromList3: function(obj) {
                       var index = _objectList3.indexOf(obj);
                       if (index > -1) {
                            _objectList3.splice(index, 1);
                       }
                  },
                  findObject3: function() {
                  },
                  getList4: function() {
                       return _objectList4;
                  },
                  addObjectToList4: function(obj) {
                       var index = _objectList4.indexOf(obj);
                       if (index === -1)
                            _objectList4.push(obj);
                  },
                  removeObjectFromList4: function(obj) {
                       var index = _objectList4.indexOf(obj);
                       if (index > -1) {
                            _objectList4.splice(index, 1);
                       }
                  },
                  findObject4: function() {
                  }
             };
             return objectManager;
        }]);

