export default class CakesListController {
  constructor($http, cakesService) {
    this.$http = $http;
    this.cakesService = cakesService;
  }

  async $routerOnActivate(next) {
    await this.fetchAllCakes();
  }

  fetchAllCakes() {
    this.loading = true;
    this.cakesService.fetchAllCakes().then((response) => {
      this.cakes = response.data.cakes;
      this.loading = false;
    }, (err) => {
      console.log(err)
    });
  }
}
