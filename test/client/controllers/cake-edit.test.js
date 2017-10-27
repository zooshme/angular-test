import angular from 'angular';
import 'angular-mocks';
import '../../../src/javascript/main.js';

describe('CakeEditController', () => {
  let $controller;
  let $scope;
  let $httpBackend;
  let router = {navigate() {}};
  let controller;

  beforeEach(() => {
    angular.mock.module('app');
    inject((_$controller_, _$httpBackend_) => {
      $controller = _$controller_;
      $httpBackend = _$httpBackend_;
    })
    $scope = {};
    let bindings = {$router: router};
    controller = $controller('CakeEditController', {$scope}, bindings);
    controller.cake = {
      _id: '59ec9a0dbf3cf12c1c745219',
      imageUrl: 'https://source.unsplash.com/random',
      name: 'Sweetie',
      comment: 'Tastes good',
      yumFactor: {value: 0, name: 'Yuck'}
    }
  });

  it('edits a record', async () => {
    expect.assertions(1);
    let routerSpy = spyOn(router, 'navigate');
    $httpBackend.whenPUT('api/cakes/59ec9a0dbf3cf12c1c745219/').respond(function(method, url, data) {
      return [200, Object.assign(JSON.parse(data)), {result: 'ok'}];
    });
    $httpBackend.expectPUT('api/cakes/59ec9a0dbf3cf12c1c745219/', {
      _id: '59ec9a0dbf3cf12c1c745219',
      imageUrl: 'https://source.unsplash.com/random',
      name: 'Sweet Cake',
      comment: 'Tastes great',
      yumFactor: {value: 5, name: "Yummy"}
    });
    await controller.updateOneCake({
      _id: '59ec9a0dbf3cf12c1c745219',
      imageUrl: 'https://source.unsplash.com/random',
      name: 'Sweet Cake',
      comment: 'Tastes great',
      yumFactor: {value: 5, name: "Yummy"}
    });
    $httpBackend.flush();
    expect(routerSpy).toHaveBeenCalled();

  });
});
