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

  submitHandler(e) {
    this.createOneCake({
      poster: this.cake.poster,
      name: this.cake.name,
      comment: this.cake.comment,
      yum: parseInt(this.cake.yum)
    })
  }

  createOneCake({poster, name, comment, yum}) {
    this.cakesService.createOneCake({poster, name, comment, yum})
      .then((response) => {
        this.cake = response.data;
        this.$router.navigate(['CakesList']);
      }, (err) => {
        console.log(err);
      });
  }
}
