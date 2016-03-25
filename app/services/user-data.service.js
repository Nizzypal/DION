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
            city:'',
            number:'',
            subject:'',
            message:'',           
            agreeTerms: ''
        };

        return{
            getUserInfo: function(){
                return UserInfo;
            },
            setUserInfo: function(value){
                if (value.email != null && value.email != ''){
                    UserInfo.email = value.email;
                }
                if (value.password != null && value.password != ''){
                    UserInfo.password = value.password;
                }
                if (value.firstname != null && value.firstname != ''){
                    UserInfo.firstname = value.firstname;
                }
                if (value.middlename != null && value.middlename != ''){
                    UserInfo.middlename = value.middlename;
                }
                if (value.lastname != null && value.lastname != ''){
                    UserInfo.lastname = value.lastname;
                }
                if (value.city != null && value.city != ''){
                    UserInfo.city = value.city;
                }
                if (value.agreeTerms != null && value.agreeTerms != ''){
                    UserInfo.agreeTerms = value.agreeTerms;
                }
                // if (value.email != null){
                //     UserInfo.email = value.email;
                // }
                // if (value.email != null){
                //     UserInfo.email = value.email;
                // }
                // if (value.email != null){
                //     UserInfo.email = value.email;
                // }
            },
            setContactInfo: function(value){
                UserInfo.firstname = value.firstname,
                UserInfo.middlename = value.middlename,
                UserInfo.lastname = value.lastname,
                UserInfo.address = value.address,
                UserInfo.number = value.number,
                UserInfo.subject = value.subject,
                UserInfo.message = value.message
            }
        };

    });