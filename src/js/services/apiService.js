(function(){
  angular.module('ricepo')
  .service('apiService', ['$http', apiService]);

  function apiService($http){
    let api = this;
    let url = 'http://localhost:3200';

    api.getDiners = function(){
      return $http.get(url + '/diners');
    };

    api.getDiner = function(id){
      console.log(id);
      return $http.get(url + '/diner/' + id);
    };

  }
})();
