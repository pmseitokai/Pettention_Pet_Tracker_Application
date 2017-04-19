pettention.controller('loginCtrl', function ($scope, $state, $rootScope, Scopes, localStorageFactory, Session) {
    console.log("Login")

    $scope.data = {};
    $scope.userData = {};

    $scope.goToFirstPage =function() {
        $rootScope.goState('firstPage', false);
    }

    $scope.toForget = function(){
        $rootScope.goState('forgetpassword', false);
    }

    $scope.checkLogin = function () {
        console.log($scope.data.username);
        console.log($scope.data.password);
        /*if(angular.isUndefined($scope.data.username) || angular.isUndefined($scope.data.password)){
                $scope.data.errMsg = "Please enter ID and Password.";
                $scope.data.username = "";
                $scope.data.password = "";
            }
    	else{
            if($scope.data.username=="admin" && $scope.data.password=="pettention"){
                Scopes.store('userdata', $scope.data);
                $rootScope.goState('home', false);
            }
            else{
                $scope.data.errMsg = "ID or Password is incorrect."
        		$scope.data.username = "";
        		$scope.data.password = "";
            }
      	}*/
        if(angular.isUndefined($scope.data.username) || angular.isUndefined($scope.data.password)){
                $scope.data.errMsg = "Please enter ID and Password.";
                $scope.data.username = "";
                $scope.data.password = "";
        }
        else{
            //$scope.getUser($scope.data.username);
            if($scope.data.password==$scope.userData.password){
                //Scopes.store('userdata', $scope.data);
                var session_create = Session.create($scope.userData.username , $scope.userData.password , $scope.userData.firstname , $scope.userData.lastname , $scope.userData.nickname , $scope.userData.gender , $scope.userData.email , $scope.userData.address , $scope.userData.phone , $scope.userData.picture);
                $rootScope.goState('home', false);
            }
            else{
                $scope.data.errMsg = "ID or Password is incorrect."
                $scope.data.username = "";
                $scope.data.password = "";
            }
        }
    }

    $scope.getUserSuccess = function(result) {
        $scope.userData = result.data[0];
        console.log("User Data");
        console.log($scope.userData);
    }
    $scope.getUser = function(username) {
        console.log("Get User Data");
        var onSuccess = $scope.getUserSuccess; 
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host+"service/index.php/Home/getUserById",
            method: 'POST',
            params: {
                username: username,
                APIKEY: 123456
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        };
        $rootScope.httpProcess(obj);
    }

});

    