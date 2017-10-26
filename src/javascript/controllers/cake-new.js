export default class CakeNewController {
  constructor($http, cakesService) {
    this.$http = $http;
    this.cakesService = cakesService;

    this.cake = {
      poster: '',
      name: '',
      comment: '',
      yumFactor: {id: 1, name: 'Yuck'}
    };

    this.yumScale = [
      { id: 1, name: 'Yuck' },
      { id: 2, name: 'aaaaa' },
      { id: 3, name: 'bbbbb' },
      { id: 4, name: 'bbbbb' },
      { id: 5, name: 'Yummy' }
    ];
  }

  hasErrors() {
    return false;
  }

  validate() {
    this.errors = [];
  }

  submitHandler(form) {
    if (form.$valid) {
      let {_id, imageUrl, name, comment, yumFactor} = this.cake;
      this.createOneCake({_id, imageUrl, name, comment, yumFactor});
    }
  }

  createOneCake(fields) {
    this.cakesService.createOneCake(fields)
      .then((response) => {
        this.cake = response.data;
        this.$router.navigate(['CakesList']);
      }, (err) => {
        console.log(err);
      });
  }
}
