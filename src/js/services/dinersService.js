(function(){
  angular.module('ricepo')
  .service('dinersService', ['apiService', dinersService]);

  function dinersService(apiService){
    let service = this;
    service.diners = [];

    service.getDiners = function(){
      return service.diners;
    }
  }
})();
