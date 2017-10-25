import CakeDetailsHtml from '../templates/cake-details.html';

const CakeDetails = {
  template: CakeDetailsHtml,
  bindings: {
    $router: '<'
  },
  controller: 'CakeDetailsController'
};

export default CakeDetails;
