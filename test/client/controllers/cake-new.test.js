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
    inject((_$controller_, _$httpBackend_) => {
      $controller = _$controller_;
      $httpBackend = _$httpBackend_;
    });
    $scope = {};
    let bindings = {$router: router};
    controller = $controller('CakeNewController', {$scope}, bindings);
    controller.cake = {
      poster: '',
      name: '',
      comment: '',
      yum: 0
    }
  });

  it('creates a new cake record', async () => {
    expect.assertions(3);
    let routerSpy = spyOn(router, 'navigate');
    $httpBackend.whenPOST('api/cakes/').respond(function(method, url, data) {
      return [200, Object.assign(JSON.parse(data), {_id: '59f03b62066113e8bc28f7c9'}), {}];
    });
    $httpBackend.expectPOST('api/cakes/', {
      poster: '',
      name: 'Sweet Cake',
      comment: 'Tastes great',
      yum: 3
    });
    await controller.createOneCake({
      poster: '',
      name: 'Sweet Cake',
      comment: 'Tastes great',
      yum: 3
    });
    $httpBackend.flush();
    expect(controller.cake.name).toEqual('Sweet Cake');
    expect(controller.cake._id).toEqual('59f03b62066113e8bc28f7c9');
    expect(routerSpy).toHaveBeenCalled();
  });
});
