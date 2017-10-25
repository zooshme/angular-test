import CakeNewHtml from '../templates/cake-new.html';

const CakeNew = {
  template: CakeNewHtml,
  controller: 'CakeNewController',
  bindings: {
    $router: '<'
  }
};

export default CakeNew;
