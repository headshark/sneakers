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
  	this.cart = [];

  	/**
  	 * @description Add product on cart
  	 * @param {object} product
  	 */
  	this.addToCart = function(product) {
  		if (this.cart.length === 0) {
			this.cart.push(product);
  		} else {
  			var repeat = false;
  			for (var i=0; i<this.cart.length; i++) {
  				if (this.cart[i].id === product.id) {
  					repeat = true;
  					product.limit = 'Sorry, you have reached the quantity limit. Please remove an item and try again.';
  				}
  			}

  			if (!repeat) {
  				this.cart.push(product);
  			}
  		}
  	};

  	/**
  	 * @description Remove item from cart
  	 * @param  {object} product
  	 * @return {void}
  	 */
  	this.removeFromCart = function(product) {
  		var index = this.cart.indexOf(product);
  		this.cart.splice(index, 1);
  		product.limit = '';
  	};
  }]);
