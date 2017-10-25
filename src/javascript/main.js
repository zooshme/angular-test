import angular from 'angular';
import 'ngcomponentrouter';

// Services
import CakesService from './services/cakes';

// Components
import Header from './components/header';
import CakesList from './components/cakes-list';
import CakesItem from './components/cakes-item';
import CakeNew from './components/cake-new';
import CakeDetails from './components/cake-details';
import CakeEdit from './components/cake-edit';
import Info from './components/info';
import Icon from './components/icon';

// Controllers
import CakeDetailsController from './controllers/cake-details.js';
import CakesListController from './controllers/cakes-list.js';
import CakesItemController from './controllers/cakes-item.js';
import CakeNewController from './controllers/cake-new.js';

// Templates
import MainHtml from './templates/main.html';

angular.module('app', ['ngComponentRouter'])
  .config(function($locationProvider) {
    $locationProvider.html5Mode({
      enabled: true
    });
  })
  .value('$routerRootComponent', 'app')
  .component('app', {
    template: MainHtml,
    $routeConfig: [
      {path: '/cakes', name: 'CakesList', component: 'cakesList', useAsDefault: true},
      {path: '/cakes/new', name: 'CakeNew', component: 'cakeNew'},
      {path: '/cakes/:id', name: 'CakeDetails', component: 'cakeDetails'},
      {path: '/cakes/:id/edit', name: 'CakeEdit', component: 'cakeEdit'},
      {path: '/info', name: 'Info', component: 'info'}
    ]
  })
  .service('cakesService', CakesService)
  .component('appHeader', Header)
  .component('cakesList', CakesList)
  .component('cakesItem', CakesItem)
  .component('cakeNew', CakeNew)
  .component('cakeDetails', CakeDetails)
  .component('cakeEdit', CakeEdit)
  .component('info', Info)
  .component('icon', Icon)
  .controller('CakeDetailsController', CakeDetailsController)
  .controller('CakesListController', CakesListController)
  .controller('CakesItemController', CakesItemController)
  .controller('CakeNewController', CakeNewController);
