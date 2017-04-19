pettention.controller('contactCtrl', function ($scope, $state, $rootScope, Scopes, localStorageFactory) {
    console.log("Contact Us")

    $scope.goToHome = function() {
        $rootScope.goState('home', false);
    }
    
});