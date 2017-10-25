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
    controller = $controller('CakesListController', {$scope});
  });

  it('fetches all cakes', async () => {
    expect.assertions(1);
    $httpBackend.whenGET('api/cakes/').respond({cakes: [{

    }]});
    $httpBackend.expectGET('api/cakes/');
    await controller.fetchAllCakes();
    $httpBackend.flush()
    expect(controller.cakes.length).toEqual(1);
  });
});
