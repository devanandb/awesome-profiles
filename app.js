angular.module('awesomeProfiles', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'pages']);

angular.module('awesomeProfiles').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/');

});

angular.module('awesomeProfiles').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
