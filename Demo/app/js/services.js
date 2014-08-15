'use strict';
/* Services */
angular.module('myApp.services', [])
        .value('version', '0.1')
        .service('objectManager', ['$localStorage', function($localStorage) {
                  this.List = {List: [
                            {id: 'OBJ-0', title: 'Drag A Box', name: 'Zero'},
                            {id: 'OBJ-1', title: 'Drag A Box', name: 'One'},
                            {id: 'OBJ-2', title: 'Drag A Box', name: 'Two'},
                            {id: 'OBJ-3', title: 'Drag A Box', name: 'Three'}]};

                  this._master = $localStorage.$default(this.List);
                  this._nextID = function() {
                       return 'OBJ-' + this._master.List.length;
                  };
                  this.emptyObject = {
                       id: '',
                       title: '',
                       name: ''
                  };
                  this.addObject = function(obj) {
                       obj.id = this._nextID();
                       this._master.List.push(obj);
                  };
                  this.deleteObject = function() {
                       var index = this._master.List.indexOf(obj);
                       if (index > -1) {
                            this._master.List.splice(index, 1);
                       }
                  };
                  this.getList = function() {
                       return this._master.List;
                  };
             }]);


