'use strict';

/**
 * @ngdoc service
 * @name sneakersApp.storeWarehouse
 * @description
 * # storeWarehouse
 * Service in the sneakersApp.
 */
angular.module('sneakersApp')
  .service('storeWarehouse', function () {
    this.getProducts = function() {
    	return $.get( '/data/products.json' );
    };
  });
