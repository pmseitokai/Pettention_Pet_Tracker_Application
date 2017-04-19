pettention.controller('homeCtrl', function ($scope, $state, $rootScope, Scopes, localStorageFactory, Session) {
    console.log("Home")

    $scope.userData = '';

    $scope.logout = function(){
        Session.destroy();
    	$rootScope.goState('firstPage', false);
    }

    $scope.goToPetProfile =function() {
        Scopes.store('userdata', $scope.data);
        $rootScope.goState('petSelect', false);
    }

    $scope.goToUserProfile =function() {
        Scopes.store('userdata', $scope.data);
        $rootScope.goState('userProfile', false);
    }

    $scope.goToGmap =function() {
        Scopes.store('userdata', $scope.data);
        $rootScope.goState('gmap', false);
    }

    $scope.goToHospital =function() {
        $rootScope.goState('hospital', false);
    }

    $scope.goToMissing =function() {
        Scopes.store('userdata', $scope.data);
        $rootScope.goState('missingpet', false);
    }

    $scope.goToContact =function() {
        Scopes.store('userdata', $scope.data);
        $rootScope.goState('contact', false);
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