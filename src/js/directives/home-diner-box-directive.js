(function(){
  angular.module('ricepo')
  .directive('homeDinerBoxDir', [homeDinerBoxDir])
  .controller('HomeNavBarCtrl', [HomeNavBarCtrl]);

  function homeDinerBoxDir(){
    return {
      templateUrl: 'views/home-diner-box.html',
      scope: {
        diner: '<'
      },
      controller: 'HomeNavBarCtrl as vm',
      bindToController: true,
    }
  }

  function HomeNavBarCtrl(){
    let vm = this;
  }
})();
