var creditoServices = angular.module('creditoServices', ['ngResource']);

creditoServices.factory('UserDetails', function($resource){
    
    var Element = function(data) {
        //set defaults properties and functions
        angular.extend(this, {
            fname: '',
            lanme: '',
            email: '',
            
            status:'NEW',
            //... other properties

            //dummy isNew function that would work on two properties to harden code
            isNew:function(){
                return (this.status=='NEW' || this.id == null);
            }
        });
        angular.extend(this, data);
    };
    return Element;

});


creditoServices.service('FileUpload', ['$http', function ($http) {
    
}]);