angular
    .module('NodeZen', [
        'ngAnimate',
        'ui.router',
        'templates',
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    /**
     * Routes and States
     */
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html',
            controller: 'HomeCtrl'
        })
        .state('index', {
            controller: 'init',
            url: "/graph",
            templateUrl: "views/init.html"
        });

    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);
      
    });