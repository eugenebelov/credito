var Credito = angular.module('Credito', [
    'ngRoute',
    'creditoControllers',
    'creditoServices',
    'validation',
    'validation.rule'
]);

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

Credito.config(['$validationProvider', function ($validationProvider) {

    var defaultMsg;

    /**
     * Setup a default message for Url
     */
    defaultMsg = {
        url: {
            error: 'Some error',
            success: 'Success'
        }
    };

    $validationProvider.setDefaultMsg(defaultMsg);
}]);

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})