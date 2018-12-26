'use strict';

/**
 * @ngdoc function
 * @name sneakersApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the sneakersApp
 */
angular.module('sneakersApp')
  .controller('StoreCtrl', ['storeWarehouse', function(storeWarehouse) {
  	this.products = storeWarehouse.getProducts();
  }]);
