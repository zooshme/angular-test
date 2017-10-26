import CakeEditHtml from '../templates/cake-edit.html';

const CakeEdit = {
  template: CakeEditHtml,
  controller: 'CakeEditController',
  bindings: {
    $router: '<'
  }
};

export default CakeEdit;
