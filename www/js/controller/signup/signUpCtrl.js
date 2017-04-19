pettention.controller('signUpCtrl', function ($scope, $state, $rootScope,  Scopes, localStorageFactory, $window) {
    console.log("Sign Up")

    $scope.data = {};

    $scope.goToFirstPage =function() {
        $rootScope.goState('firstPage', false);
    }

    $scope.signupSuccess = function(result){
    	console.log("Sign Up Success");   
        $scope.data.successMessage = "Register Complete !!";
        $scope.data.username = "";
        $scope.data.checkMessage = "";
        $scope.data.password = "";
        $scope.data.confirm_password = "";
        $scope.data.firstname = "";
        $scope.data.lastname = "";
        $scope.data.nickname = "";
        $scope.data.gender = "";
        $scope.data.email = "";
        $scope.data.checkEmailMessage = "";
        $scope.data.checkMessage = "";
        //$scope.data.picture = ""; 
    }
    $scope.signup = function(){
    	console.log("Sign Up");
        console.log($scope.data);       
        var onSuccess = $scope.signupSuccess;
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host + "service/index.php/SignUp/signup",
            method: 'POST',
            params: {
                username: $scope.data.username,
                password: $scope.data.password,
                firstname: $scope.data.firstname,
            lastname: $scope.data.lastname,
                nickname: $scope.data.nickname,
                gender: $scope.data.gender,                        
                email: $scope.data.email,
                /*picture: $scope.data.picture,*/
                APIKEY: 123456
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        }
        $rootScope.httpProcess(obj);        
    }

    $scope.checkSignup = function(){
        if(angular.isUndefined($scope.data.username) ||
            angular.isUndefined($scope.data.password) ||
            angular.isUndefined($scope.data.firstname) ||
            angular.isUndefined($scope.data.lastname) ||
            angular.isUndefined($scope.data.nickname) ||
            angular.isUndefined($scope.data.gender) ||
            angular.isUndefined($scope.data.email) ||
            $scope.data.email == "" ) {
            $scope.data.successMessage = "Please enter all field !!";
        }
        else{
            if($scope.data.checkEmailMessage == "You can use this email."){
                $scope.signup();
            }
            else{
                $scope.data.successMessage = "Please check email field !!"
            }
        }

    }

    $scope.checkPassword = function(){
    	console.log("Check Password");
    	if($scope.data.password != $scope.data.confirm_password){
    		$window.alert("Please enter same password.");
    		document.getElementById("signup_con_pass").value = "";
    		document.getElementById("signup_pass").value = "";
    		document.getElementById("signup_pass").focus;
    	}

    }

    $scope.checkUsernameSuccess = function(result){
        console.log(result);
        if(result.status==200){
            $scope.data.checkMessage = "This username is already use.";
            $scope.data.username = "";
        }
        else{
            $scope.data.checkMessage = "You can use this username.";
        }
    }
    $scope.checkUsername = function(username){
        console.log("Check Username");
        var onSuccess = $scope.checkUsernameSuccess;
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host + "service/index.php/UserProfile/getUserById",
            method: 'POST',
            params: {
                username: username,
                APIKEY: 123456
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        }
        $rootScope.httpProcess(obj);
    }

    $scope.checkEmailSuccess = function(result){
        console.log(result);
        if(result.status==200){
            $scope.data.checkEmailMessage = "This email is already use.";
            $scope.data.email = "";
        }
        else{
            if(angular.isUndefined($scope.data.email)){
                $scope.data.checkEmailMessage = "Please enter email.";
            }
            else{
                $scope.data.checkEmailMessage = "You can use this email.";
            }
        }
    }
    $scope.checkEmail = function(email){
        console.log("Check Email");
        var onSuccess = $scope.checkEmailSuccess;
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host + "service/index.php/UserProfile/getUserByEmail",
            method: 'POST',
            params: {
                email: email,
                APIKEY: 123456
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        }
        $rootScope.httpProcess(obj);
    }

});

