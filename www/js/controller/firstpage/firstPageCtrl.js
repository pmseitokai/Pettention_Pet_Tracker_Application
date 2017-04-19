pettention.controller('firstPageCtrl', function ($scope, $state, $rootScope) {
    console.log("First Page");

    $scope.toLogin = function(){
    	$rootScope.goState('login', false);
    }

    $scope.toSignUp = function(){
    	$rootScope.goState('signup', false);
    }

});

