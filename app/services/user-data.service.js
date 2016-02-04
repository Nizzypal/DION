'user strict'
angular.module('app')
    .service('UserDataService', function(){

        var UserInfo = {
            userID: '',
            email: '',
            password:'',
            firstname:'',
            middlename:'',
            lastname:'',
            address:'',
            number:'',
            subject:'',
            message:''            
            remember: ''
        };

        return{
            getUserInfo: function(){
                return UserInfo;
            },
            setUserInfo: function(value){
                UserInfo.email = value.email;
                UserInfo.password = value.password;
                UserInfo.remember = value.remember;    
            }
            setContactInfo: function(value){
                UserInfo.firstname = value.
                UserInfo.middlename = value.
                UserInfo.lastname = value.
                UserInfo.address:'',
                UserInfo.number:'',
                UserInfo.subject:'',
                UserInfo.message:''            
            }
        };

    });