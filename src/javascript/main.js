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
import Loading from './components/loading';

// Controllers
import CakeDetailsController from './controllers/cake-details.js';
import CakesListController from './controllers/cakes-list.js';
import CakesItemController from './controllers/cakes-item.js';
import CakeNewController from './controllers/cake-new.js';
import CakeEditController from './controllers/cake-edit.js';

// Directives
import YumFactor from './directives/yum-factor';

// Templates
import MainHtml from './templates/main.html';

// Filters
import markdown from './filters/markdown.js';
import unsafe from './filters/unsafe.js';

angular.module('app', ['ngComponentRouter'])
  .config(function($locationProvider) {
    $locationProvider.html5Mode({
      enabled: true
    });
  })
  .value('$routerRootComponent', 'app')
  .filter('markdown', markdown)
  .filter('unsafe', unsafe)
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
  .component('loading', Loading)
  .controller('CakeDetailsController', CakeDetailsController)
  .controller('CakesListController', CakesListController)
  .controller('CakesItemController', CakesItemController)
  .controller('CakeNewController', CakeNewController)
  .controller('CakeEditController', CakeEditController)
  .directive('yumFactor', YumFactor);
