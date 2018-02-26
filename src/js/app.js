(function(){
  angular.module('ricepo', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/home', {
        url: '/home',
        templateUrl: './views/home.html',
        controller: 'HomeCtrl as vm'
    })
    .when('/diner/checkout', {
      templateUrl :'views/checkout.html',
      controller:'CheckoutCtrl as vm'
    })

    .when('/diner/:id', {
      url: '/diner/:id',
      templateUrl: './views/diner.html',
      controller:'DinerCtrl as vm'
    })

    .when('/diner/:id/:name',{
      templateUrl: './views/dish-detail.html',
      controller:'DishDetailCtrl as vm'
    })

    .when('/not-found', {
      templateUrl: 'views/not-found.html'
    });

    $routeProvider.otherwise('/not-found');
  }]);
})();
