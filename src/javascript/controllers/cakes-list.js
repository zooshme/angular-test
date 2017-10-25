export default class CakesListController {
  constructor($http, cakesService) {
    this.$http = $http;
    this.cakesService = cakesService;
  }

  async $routerOnActivate(next) {
    await this.fetchAllCakes();
  }

  fetchAllCakes() {
    this.cakesService.fetchAllCakes().then((response) => {
      this.cakes = response.data.cakes;
    }, (err) => {
      console.log(err)
    });
  }
}
