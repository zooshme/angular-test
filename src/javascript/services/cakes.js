export default class CakesService {
  constructor($http) {
    this.$http = $http;
  }

  fetchAllCakes() {
    return this.$http.get(`api/cakes/`);
  }

  fetchOneCake(id) {
    return this.$http.get(`api/cakes/${id}/`);
  }

  createOneCake(fields) {
    return this.$http.post(`api/cakes/`, fields);
  }

  deleteOneCake(id) {
    return this.$http.delete(`api/cakes/${id}/`);
  }
}
