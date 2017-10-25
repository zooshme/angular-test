import angular from 'angular';
import 'angular-mocks';
import '../../../src/javascript/main.js';

describe('CakesListController', () => {
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
    controller = $controller('CakesItemController', {$scope});
    controller.cakes = [{name: 1}, {name: 2}, {name: 3}];
    controller.cake = [{name: 2}];
    controller.index = 1;
  });

  it('deletes a cake record', async () => {
    expect.assertions(1);
    $httpBackend.whenDELETE('api/cakes/59f03b62066113e8bc28f7c9/').respond({});
    $httpBackend.expectDELETE('api/cakes/59f03b62066113e8bc28f7c9/');
    await controller.deleteOneCake('59f03b62066113e8bc28f7c9');
    $httpBackend.flush()
    expect(controller.cakes.length).toEqual(2);
  });

});
