'use strict';

describe('Service: storeWarehouse', function () {

  // load the service's module
  beforeEach(module('sneakersApp'));

  // instantiate service
  var storeWarehouse;
  beforeEach(inject(function (_storeWarehouse_) {
    storeWarehouse = _storeWarehouse_;
  }));

  it('should do something', function () {
    expect(!!storeWarehouse).toBe(true);
  });

});
