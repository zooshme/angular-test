export default class CakeEditController {
  constructor($http, cakesService) {
    this.$http = $http;
    this.cakesService = cakesService;

    this.yumScale = [
      { id: 1, name: 'Yuck' },
      { id: 2, name: 'fadfasf' },
      { id: 3, name: 'dfag' },
      { id: 4, name: 'dgafdas' },
      { id: 5, name: 'Yummy' }
    ];
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
