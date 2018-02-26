(function(){
  angular.module('ricepo')
  .controller('DinerCtrl', ['$routeParams','apiService','$location', DinerCtrl]);

  function DinerCtrl($routeParams, apiService, $location){
    let vm = this;
    vm.diner = {};

    apiService.getDiner($routeParams.id).then(
      (diner) => {
        vm.diner = diner.data;
        
        console.log(vm.diner);
      },
      (err) => {
        console.log('unsuccess');
        //$location.path('/not-found');
      }
    )
  }
})();
