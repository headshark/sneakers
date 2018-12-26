'use strict';

/**
 * @ngdoc function
 * @name sneakersApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the sneakersApp
 */
angular.module('sneakersApp')
  .controller('StoreCtrl', function () {
  	this.products = [
  		{
  			id: 'air-jordan-1-origin-story',
    		brand: 'Air Jordan 1',
    		name: 'Origin Story',
    		desc: 'Some description...',
    		price: 160,
    		size: {
    			9: 0,
    			10: 100,
    			11: 100,
    			12: 0
    		},
    		image: 'aj1-originstory.jpg'
    	},
    	{
  			id: 'air-fear-of-god-black',
    		brand: 'Air Fear of God',
    		name: 'Black',
    		desc: 'Some description...',
    		price: 350,
    		size: {
    			9: 0,
    			10: 100,
    			11: 100,
    			12: 0
    		},
    		image: 'fog-black.jpg'
    	},
    	{
  			id: 'air-jordan-11-concord',
    		brand: 'Air Jordan XI',
    		name: 'Concord',
    		desc: 'Some description...',
    		price: 220,
    		size: {
    			9: 0,
    			10: 100,
    			11: 100,
    			12: 0
    		},
    		image: 'aj11-concord.jpg'
    	}
    ];
  });
