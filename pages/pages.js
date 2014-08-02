angular.module('pages', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('pages').config(function($stateProvider) {

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'pages/partial/home/home.html'
    });
    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'pages/partial/about/about.html'
    });
    /* Add New States Above */

});

