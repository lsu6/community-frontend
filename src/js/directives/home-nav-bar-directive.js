(function(){
  angular.module('ricepo')
  .directive('homeNavBarDir', [homeNavBarDir]);

  function homeNavBarDir(){
    return {
      templateUrl: 'views/home-nav-bar.html'
    }
  }

  
})();
