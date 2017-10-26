export default class CakeDetailsController {
  constructor($http, cakesService) {
    this.$http = $http;
    this.cakesService = cakesService;
  }

  async $routerOnActivate(next) {
    await this.fetchOneCake(next.params.id);
  }

  fetchOneCake(id) {
    this.cakesService.fetchOneCake(id).then((response) => {
      this.cake = response.data;
    }, () => {
      console.log(err);
    });
  }
}
