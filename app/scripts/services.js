var creditoServices = angular.module('creditoServices', ['ngResource']);

creditoServices.factory('UserDetails', function($resource){
    
    // var firstName = '',
    //     lastName = '';

    // return {
    //     fname: firstName,
    //     lname: lastName
    // };

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


    // function UserDetails(data) {  
    //     if (data) {  
    //         this.setData(data);
    //     }
    // };  

    // UserDetails.prototype = {
    //     setData: function(data) {  
    //         angular.extend(this, data);  
    //     }
    // }

    // return UserDetails; 
});