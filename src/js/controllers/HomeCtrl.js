(function(){
  angular.module('ricepo')
  .controller('HomeCtrl', ['apiService','$location', 'dinersService', HomeCtrl]);

  function HomeCtrl(apiService,$location, dinersService){
    let vm = this;

    vm.diners = [];

    apiService.getDiners().then(
      (diners) => {
        vm.diners = diners.data;
        console.log(vm.diners);
      },
      (err) => {
        console.log(err);
      }
    );

    vm.onNavToDiner = function(diner){
      $location.path('/diner/'+ diner._id);
    }
  }
})();
