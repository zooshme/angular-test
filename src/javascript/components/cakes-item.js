import CakesItemHtml from '../templates/cakes-item.html';

const CakesItem = {
  template: CakesItemHtml,
  bindings: {
    cake: '=',
    cakes: '=',
    index: '<'
  },
  controller: 'CakesItemController'
};

export default CakesItem;
