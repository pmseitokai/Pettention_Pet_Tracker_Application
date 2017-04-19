/*angular.module('application', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            template: '<p>this is part of home</p>'
        })
        .state('login', {
            url: '/login',
            template: '../templates/login/login.html'
        });
});*/

var pettention = angular.module('pettention', ['ui.router','ngMaterial','ngFileUpload','cp.ng.fix-image-orientation'])
    .constant('MODAL', {
        templateSingleBtn: 'templateSingleBtn'
    })
    .constant('OS', {
        web: 'Web',
        Android: 'Android',
        ios: 'iOS'
    })
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider.state('event', {
            url: "/event",
            abstract: true,
            templateUrl: "menu.html",
        });
        $urlRouterProvider.otherwise("/firstPage");

    });

pettention.filter('dateToISO', function() {
    return function(input) {
        input = new Date(input).toISOString();
        return input;
    };
});

pettention.service('fileUpload', ['$http', function($http) {
    this.uploadFileToUrl = function(file, uploadUrl, name) {
        var fd = new FormData();
        fd.append('file', file);
        fd.append('name', name);
        $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: { 'Content-Type': undefined, 'Process-Data': false }
            })
            .success(function() {
                // console.log("Success");
            })
            .error(function() {
                // console.log("Error");
            });
    }
}]);

pettention.run(function ($rootScope, $http, $state, $templateCache, $timeout) {
    $rootScope.host = "https://pettention.ga/pettention/";

    $rootScope.goState = function (name, directionBack, params) {
        if (params) {
            $state.go(name, params);
        } else {
            $state.go(name);
        }
    };
    $rootScope.chklogin = function () {
        var userdata = localStorageFactory.isKey('userdata');
        if (userdata) {
            console.log("Have Session");
            $rootScope.userdata = localStorageFactory.get('userdata');
            $rootScope.goState('home', false);
        } else {
            console.log("No Userdata");
            $rootScope.goState('firstPage', true);
        }
    }
    $rootScope.onFailure = function(response) {
        console.log(response)
        $rootScope.errorMessage = res.statusText;
        $rootScope.errorCode = res.status;
        $rootScope.$broadcast("showErrorMessage", $rootScope.errorCode, $rootScope.errorMessage);
    }
    $rootScope.httpProcess = function(obj) {
        console.log("httpProcess");
        console.log(obj);
        // http post to service
        $http({
            method: obj.method,
            url: obj.url,
            data: $.param(obj.params),
            // data: api,
            headers: { 'content-Type': 'application/x-www-form-urlencoded' }
            // headers: { 'content-Type': 'application/form-data' }
        }).then(function(response) {
            console.log("on success");
            console.log(response);
            obj.onSuccess(response);
            /*$ionicLoading.show({
                template: '<ion-spinner icon="bubbles"></ion-spinner>'
            }).then(function() {
                $timeout(function() {
                    // console.log("The loading indicator is now displayed");
                    if (response.data.code == 1) {
                        $ionicLoading.hide().then(function() {
                            console.log("-------CODE = 1-------");
                                var alertPopup = $ionicPopup.alert({
                                title: 'Warning !!',
                                template: '<div class="text-center"><p>'+response.data.code+'</p><p>'+response.data.description+'</p></div>',
                                // templateUrl: 'templates/popup-template/popup-template-home.html',
                                cssClass: 'custom-popup'
                            });

                            alertPopup.then(function(res) {
                                // $rootScope.goState('login', true);-
                            });
                            // $rootScope.$broadcast("showErrorMessage", response.data.code, response.data.description);
                        });
                    } else {
                        $ionicLoading.hide().then(function() {
                            // console.log("The loading indicator is now hidden");
                            console.log("-------CODE = 0-------");
                            obj.onSuccess(response);
                        });
                    }
                }, 1000);
            });*/
            
        }), function(response) {
            console.log("on failure");
            console.log(response);
            /*$ionicLoading.show({
                template: '<ion-spinner icon="bubbles"></ion-spinner>'
            }).then(function() {
                $timeout(function() {
                    $ionicLoading.hide().then(function() {
                        var alertPopup = $ionicPopup.alert({
                            title: 'Warning !!',
                            template: '<div class="text-center"><p>เกิดข้อผิดพลาดการจากเข้าสู่ระบบ กรุณาเข้าสู่ระบบอีกครั้ง</p></div>',
                            // templateUrl: 'templates/popup-template/popup-template-home.html',
                            cssClass: 'custom-popup'
                        });

                        alertPopup.then(function(res) {
                            Session.destroy();
                            Scopes.destroy();
                            $rootScope.goState('login', true);
                        });
                    });
                }, 1000);
            });*/
        }
    }
});
