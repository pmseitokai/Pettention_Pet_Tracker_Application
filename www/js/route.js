pettention.config(function($stateProvider, $urlRouterProvider){
	
	/*$stateProvider
		.state('login',{
		    url: '/login',
		    views: {
		        'menuContent': {
		            templateUrl: 'templates/login/login.html',
		            controller: 'loginCtrl',
		        }
		    }
		})
        .state('home', {
            url: '/home',
            views: {
                'menuContent': {
                    templateUrl: 'templates/home/home.html',
                    controller: 'homeCtrl',
                }
            }
        })*/
    $stateProvider
        .state('firstPage', {
            url: '/firstPage',
            templateUrl: 'templates/firstpage/firstpage.html',
            controller: 'firstPageCtrl',
        })
		.state('login', {
		    url: '/login',
		    templateUrl: 'templates/login/login.html',
		    controller: 'loginCtrl',
		})
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home/home.html',
            controller: 'homeCtrl',
        })
        .state('petSelect', {
            url: '/petSelect',
            templateUrl: 'templates/petprofile/petSelect.html',
            controller: 'petSelectCtrl',
        })
        .state('addPet', {
            url: '/addPet',
            templateUrl: 'templates/petprofile/petAdd.html',
            controller: 'petAddCtrl',
        })
        .state('petProfile', {
            url: '/petProfile',
            templateUrl: 'templates/petprofile/petProfile.html',
            controller: 'petProfileCtrl',
        })
        .state('petProfileEdit', {
            url: '/petProfileEdit',
            templateUrl: 'templates/petprofile/petProfileEdit.html',
            controller: 'petProfileEditCtrl',
        })
        .state('userProfile', {
            url: '/userProfile',
            templateUrl: 'templates/userprofile/userProfile.html',
            controller: 'userProfileCtrl',
        })
        .state('userProfileEdit', {
            url: '/userProfileEdit',
            templateUrl: 'templates/userprofile/userProfileEdit.html',
            controller: 'userProfileEditCtrl',
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'templates/signup/signup.html',
            controller: 'signUpCtrl',
        })
        .state('gmap', {
            url: '/gmap',
            templateUrl: 'templates/gmap/gmap.html',
            controller: 'gmapCtrl',
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'templates/contact/contact.html',
            controller: 'contactCtrl',
        })
        .state('forgetpassword', {
            url: '/forgetpassword',
            templateUrl: 'templates/forgetpassword/forgetpassword.html',
            controller: 'forgetPasswordCtrl',
        })
        .state('missingpet', {
            url: '/missingpet',
            templateUrl: 'templates/missingpet/missingpet.html',
            controller: 'missingPetCtrl',
        })
        .state('missingpettrack', {
            url: '/missingpettrack',
            templateUrl: 'templates/missingpet/missingpettrack.html',
            controller: 'missingPetTrackCtrl',
        })
        .state('missingpettracknogps', {
            url: '/missingpettracknogps',
            templateUrl: 'templates/missingpet/missingpettracknogps.html',
            controller: 'missingPetTrackNoGPSCtrl',
        })
        .state('missingpetsearch', {
            url: '/missingpetsearch',
            templateUrl: 'templates/missingpet/missingpetsearch.html',
            controller: 'missingPetSearchCtrl',
        }).state('missingpetsearchtype', {
            url: '/missingpetsearchtype',
            templateUrl: 'templates/missingpet/missingpetsearchtype.html',
            controller: 'missingPetSearchTypeCtrl',
        }).state('missingpetsearchid', {
            url: '/missingpetsearchid',
            templateUrl: 'templates/missingpet/missingpetsearchid.html',
            controller: 'missingPetSearchIdCtrl',
        })
        .state('hospital', {
            url: '/hospital',
            templateUrl: 'templates/hospital/hospital.html',
            controller: 'hospitalCtrl',
        })


});
