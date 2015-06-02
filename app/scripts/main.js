var Credito = angular.module('Credito', ['ngRoute',
	'creditoControllers', 
	'creditoServices']);

Credito.config(['$routeProvider', 
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'templates/pages/login-page.html',
                controller: 'LoginController'
            }).
            when('/registration', {
                templateUrl: 'templates/pages/user-details.html',
                controller: 'UserDetailsController'
            }).
            when('/upload', {
                templateUrl: 'templates/pages/upload-steps.html',
                controller: 'UploadController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})