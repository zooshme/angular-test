export default class CakeEditController {
  constructor($http, cakesService, $scope) {
    this.$http = $http;
    this.cakesService = cakesService;
    this.$scope = $scope;

    this.yumScale = [
      { id: 1, name: 'Yuck' },
      { id: 2, name: 'aaaaa' },
      { id: 3, name: 'bbbbb' },
      { id: 4, name: 'ccccc' },
      { id: 5, name: 'Yummy' }
    ];
  }

  async $routerOnActivate(next) {
    await this.fetchOneCake(next.params.id);
  }

  fetchOneCake(id) {
    this.cakesService.fetchOneCake(id).then((response) => {
      this.cake = response.data;
    }, (err) => {
      console.log(err);
    });
  }

  async submitHandler() {
    let {_id, imageUrl, name, comment, yumFactor} = this.cake;
    await this.updateOneCake({_id, imageUrl, name, comment, yumFactor});
  }

  updateOneCake(fields) {
    this.cakesService.updateOneCake(fields).then((response) => {
      this.$router.navigate(['CakeDetails', {id: fields._id}]);
    }, (err) => {
      console.log(err);
    })
  }
}
