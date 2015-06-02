var creditoControllers = angular.module('creditoControllers', []);

creditoControllers.controller('LoginController', ['$rootScope', '$scope', '$window', 'UserDetails', '$injector',
	function ($rootScope, $scope, $window, UserDetails, $injector) {
        // Injector
        var $validationProvider = $injector.get('$validation');

		$rootScope.showUser = false;

		$scope.userDetails = {
			fname: '',
			lname: '',
			email: 'mail@company.com'
		};

		$scope.loginHandler = function() {

			UserDetails.fname = $scope.userDetails.fname;
			UserDetails.lname = $scope.userDetails.lname;
			UserDetails.email = $scope.userDetails.email;

			if($scope.userDetails.fname != "")
				$window.location.href = "#/registration"
		}

        /**
         * Additions validation
         */
        $validationProvider
            .setExpression({
                email: function (value, scope, element, attrs) {
                    var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                    return (pattern.test(value) && value !== 'email@company.com' );
                },
                fname: function(value, scope, element, attrs){
                    return value !== '' && value !== 'Name';
                }
            })
            .setDefaultMsg({
                email: {
                    error: 'Enter a valid email'
                    //success: ''
                },
                fname: {
                    error: 'Enter your name'
                    //success: ''
                }
            });
}]);

creditoControllers.controller('UserDetailsController', ['$rootScope', '$scope', '$window', 'UserDetails' , 
	function ($rootScope, $scope, $window, UserDetails) {
		console.log("UserDetailsController", UserDetails.email, UserDetails.lname, UserDetails.fname);

		$scope.fname = UserDetails.fname;
		$scope.lname = UserDetails.lname;
		$scope.email = UserDetails.email;

		$rootScope.showUser = true;
		$rootScope.userName = UserDetails.fname;


		$scope.skipFilling = function() {
			console.log("skipe")
			$window.location.href = "#/upload"
		}
}])

creditoControllers.controller('UploadController', ['$rootScope', '$scope', '$window', 'UserDetails' , 
	function ($rootScope, $scope, $window, UserDetails) {
		
}])