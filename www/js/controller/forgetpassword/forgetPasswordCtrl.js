pettention.controller('forgetPasswordCtrl', function ($scope, $state, $rootScope, Scopes, localStorageFactory) {
    console.log("Forget Password")

    $scope.goToFirstPage = function() {
        $rootScope.goState('firstPage', false);
    }

    $scope.goToLogin = function() {
        $rootScope.goState('login', false);
    }

    $scope.getUserSuccess = function(result) {
	    console.log("User Data");
        if(result.status == 200){
            $scope.userData = result.data[0];
            console.log($scope.userData);
            $scope.password = "Your password is : "+$scope.userData.password;
        }
        else{
            $scope.password = "Please enter correct ID.";
        }
        
  	}
    $scope.getUser = function() {
        console.log("Get User Data");
		var onSuccess = $scope.getUserSuccess; 
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host+"service/index.php/UserProfile/getUserById",
            method: 'POST',
            params: {
                username: $scope.username,
                APIKEY: 123456
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        };
        $rootScope.httpProcess(obj);
    }
    
});