pettention.controller('userProfileCtrl', function ($scope, $state, $rootScope,  Scopes, localStorageFactory) {
    console.log("User Page")

    $scope.userData = '';

    $scope.goToHome =function() {
        $rootScope.goState('home', false);
    }

    $scope.goToEdit =function() {
        $rootScope.goState('userProfileEdit', false);
    }

    $scope.getUserSuccess = function(result) {
	    $scope.userData = result.data[0];
        console.log("User Data");
	    console.log($scope.userData);
  	}
    $scope.getUser = function() {
        console.log("Get User Data");
		var onSuccess = $scope.getUserSuccess; 
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host+"service/index.php/Home/getUserById",
            method: 'POST',
            params: {
                username: localStorageFactory.get('userdata').username,
                APIKEY: 123456
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        };
        $rootScope.httpProcess(obj);
    }
    $scope.getUser();

});

pettention.controller('userProfileEditCtrl', function ($scope, $state, $rootScope,  Scopes, localStorageFactory, $window, Upload) {
    console.log("Edit User Page")

    $scope.userData = '';
    var profilePic = "profile_"+localStorageFactory.get('userdata').username;
    var picType = "";
    var picUrl = "";
    $scope.userData.progressPercentage = 0;

    /////////////////////////////upload//////////////////////////////////////////
    $scope.submit = function() {
      if ($scope.userData.picFile) {
        $scope.upload($scope.userData.picFile);
      }
    };

    // upload on file select or drop
    $scope.upload = function (file) {
        Upload.upload({
            url: $rootScope.host+'service/application/libraries/upload_user.php?username='+localStorageFactory.get('userdata').username,
            data: {file: file,
                    name: profilePic}
        }).then(function (resp) {
            console.log(' Response: '+resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            $scope.userData.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + $scope.userData.progressPercentage + '% ' + evt.config.data.file.name);
	        if($scope.userData.progressPercentage == 100){
	        	$scope.userData.msg = "Edit Success!!";
	        	$window.alert("Edit Successful.",$rootScope.goState('userProfile', false));
	       	}       
        });
    };
    /////////////////////////////////////////////////////////////////////////////

    $scope.goToHome =function() {
        $rootScope.goState('home', false);
    }

    $scope.goToProfile =function() {
        $rootScope.goState('userProfile', false);
    }

    $scope.getUserSuccess = function(result) {
        $scope.userData = result.data[0];
        console.log("User Data");
        console.log($scope.userData);
    }
    $scope.getUser = function() {
        console.log("Get User Data");
        var onSuccess = $scope.getUserSuccess; 
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host+"service/index.php/Home/getUserById",
            method: 'POST',
            params: {
                username: localStorageFactory.get('userdata').username,
                APIKEY: 123456
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        };
        $rootScope.httpProcess(obj);
    }
    $scope.getUser();

    $scope.checkPassword = function(){
        console.log("Check Password");
        if($scope.userData.password != $scope.userData.confirm_password){
            $window.alert("Please enter same password.");
            $scope.userData.password = "";
            $scope.userData.confirm_password = "";
            $scope.userData.msg = "Please enter same password.";
        }
        else{
            $scope.userData.msg = "";
        }

    }

    $scope.editUserSuccess = function(result){
    	if(!angular.isUndefined($scope.userData.picFile)){
    	        $scope.submit();
    	}
        $scope.userData.username = "";
        $scope.userData.password = "";
        $scope.userData.confirm_password = "";
        $scope.userData.firstname = "";
        $scope.userData.lastname = "";
        $scope.userData.nickname = "";
        $scope.userData.gender = "";
        $scope.userData.email = "";
        $scope.userData.address = "";
        $scope.userData.phone = "";
        $scope.userData.detail = "";
        $scope.userData.picFile = "";
    }
    $scope.editUser = function(){
        console.log("Edit user Data");
        if(!angular.isUndefined($scope.userData.picFile)){
        	picType = $scope.userData.picFile.name.substr($scope.userData.picFile.name.lastIndexOf('.')+1);
        	picUrl = 'https://pettention.ga/pettention/img/profile/user/'+profilePic+'.'+picType;
    	}
    	else{
    		picUrl = $scope.userData.picture;
    	}
        var onSuccess = $scope.editUserSuccess;
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host+"service/index.php/UserProfile/editUserById",
            method: 'POST',
            params: {
                APIKEY: 123456,
                username: $scope.userData.username,
                password: $scope.userData.password,
                firstname: $scope.userData.firstname,
                lastname: $scope.userData.lastname,
                nickname: $scope.userData.nickname,
                gender: $scope.userData.gender,
                email: $scope.userData.email,
                address: $scope.userData.address,
                phone: $scope.userData.phone,
                detail: $scope.userData.detail,
                picture: picUrl
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        };
        $rootScope.httpProcess(obj);
    }

});

