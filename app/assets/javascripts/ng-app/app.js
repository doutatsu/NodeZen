angular
    .module('NodeZen', [
        'ngAnimate',
        'ui.router',
        'templates',
        'restangular'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    /**
     * Routes and States
     */
    $stateProvider
        .state('index', {
            controller: 'init',
            url: "/",
            templateUrl: "views/init.html"
        });

    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);
      
    });