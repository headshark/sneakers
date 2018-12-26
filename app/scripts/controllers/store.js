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
    this.id = 'air-jordan-1-origin-story';
    this.brand = 'Air Jordan 1';
    this.name = 'Origin Story';
    this.price = 160;
    this.image = 'aj1-originstory.jpg';
  });
