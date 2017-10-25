import angular from 'angular';
import 'angular-mocks';
import '../../../src/javascript/main.js';

describe('CakeDetailsController', () => {
  let $controller;
  let $scope;
  let $httpBackend;
  let controller;

  beforeEach(() => {
    angular.mock.module('app');
    inject((_$controller_, _$httpBackend_, _$rootScope_) => {
      $controller = _$controller_;
      $httpBackend = _$httpBackend_;
    })

    $scope = {};
    controller = $controller('CakeDetailsController', {$scope});
  });


  it('fetches one cake based on id', async () => {
    expect.assertions(1);
    $httpBackend.whenGET('api/cakes/someid/').respond({name: 'Something else'});
    $httpBackend.expectGET('api/cakes/someid/');
    await controller.fetchOneCake('someid');
    $httpBackend.flush()
    expect(controller.cake.name).toEqual('Something else');
  });
});
