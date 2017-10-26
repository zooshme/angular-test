export default class CakesItemController {
  constructor($http, $sce, cakesService) {
    this.$http = $http;
    this.$sce = $sce;
    this.cakesService = cakesService;
  }
  
  deleteClickHandler() {
    if (confirm('Are you sure you want to remove this cake?')) {
      this.deleteOneCake(this.cake._id)
    }
  }

  deleteOneCake(id) {
    this.cakesService.deleteOneCake(id).then((response) => {
      this.removeFromList(this.cakes, this.index);
    }, (err) => {
      console.log(err);
    });
  }

  removeFromList(cakes, index) {
    cakes.splice(index, 1);
  }
}
