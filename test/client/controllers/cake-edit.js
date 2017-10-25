import angular from 'angular';
import 'angular-mocks';
import '../../../src/javascript/main.js';

describe('CakeNewController', () => {
  let $controller;
  let $scope;
  let $httpBackend;
  let router = {navigate() {}};
  let controller;

  beforeEach(() => {
    angular.mock.module('app');
    inject((_$controller_, _$httpBackend_, _$rootScope_) => {
      $controller = _$controller_;
      $httpBackend = _$httpBackend_;
    })

    $scope = {};
    controller = $controller('CakesItemController', {$scope});
    controller.cake = [{name: 2}];
    controller.index = 1;
  });

  it('edits a record', () => {

  });
});
