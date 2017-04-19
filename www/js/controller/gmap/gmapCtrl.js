pettention.controller('gmapCtrl', function ($scope, $state, $rootScope,  Scopes, localStorageFactory, $window, $location, $timeout, $interval) {
    console.log("Google Map")

    $scope.petLocation = '';

    $scope.goToHome =function() {
        $scope.stop();
        $rootScope.goState('home', false);
    }

    $scope.goToAddPet =function() {
        $rootScope.goState('addPet', false);
    }

    var infowindow = "";
    var map = "";
    var html2 = "";
    var cur_lat = "";
    var cur_lng = "";
    /*var lat;
    var lng;*/

    $scope.initMap = function(/*lat,lng*/){
        map = new google.maps.Map(document.getElementById('map_canvas'),
        {
            /*center: {lat: lat,
                     lng: lng},*/
            zoom: 16
        });

        $scope.image = {
            url: 'img/PinMap-Man1.png',
            size: new google.maps.Size(50, 50),//50,50
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(25, 50), //0, 50
            scaledSize: new google.maps.Size(50, 50)//0,50
        };

        $scope.marker = new google.maps.Marker({
            map: map,
            icon: $scope.image
        });

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                function(position){
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };

                    $scope.marker.setPosition(pos);
                    map.setCenter(pos);

                    service = new google.maps.places.PlacesService(map);
                    service.nearbySearch({
                          location: {lat: position.coords.latitude,
                                    lng: position.coords.longitude},
                          radius: 2500,
                          type: ['veterinary_care']
                        }, callback);
                },function(){
                    handleLocationError(true, infowindow, map.getCenter());
                }
            );
        }else{
             handleLocationError(false, infowindow, map.getCenter());
        }


        infowindow = new google.maps.InfoWindow();
        $scope.getPetByUserId();
        //$scope.selectPetLocation();
        /*service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
              location: {lat: cur_lat,
                        lng: cur_lng},
              radius: 2500,
              type: ['hospital']
            }, callback);*/
    }

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
    }

    var markers = [];

    $scope.selectPetLocation = function(){
        //var json = $.parseJSON(text);
        var totalPet = $scope.petLocation.length;
        for(var i = 0;i < totalPet;i++){
            $scope.petLocation[i].index = i; 
            var lat = $scope.petLocation[i].latitude;
            var lng = $scope.petLocation[i].longitude;
            var pet_name = $scope.petLocation[i].name;

            var date_time = $scope.petLocation[i].date_time;
            var latlng = new google.maps.LatLng(lat,lng);

            var image2 = {
                      url: 'img/PinMap-Pet1.png',
                      size: new google.maps.Size(50, 50),//50,50
                      origin: new google.maps.Point(0, 0),
                      anchor: new google.maps.Point(25, 50), //1. 0, 50 or 2. 25, 50
                      scaledSize: new google.maps.Size(50, 50)//50,50
                    };
            var marker2 = new google.maps.Marker({
                      map: map,
                      icon: image2,
                      html: 'PET ID: '+$scope.petLocation[i].pet_id+', '+'PET NAME: '+pet_name, 
                      position:latlng,
                    });
            markers.push(marker2);

            /*html2 += '<tr>';
                    html2 += '<td>';
                        html2 += '<button type="button" ng-click="showInfowindow('+i+')">search</button>';
                    html2 += '<td>';

                    html2 += '<td class="TdGpsStatusOn">';
                        html2 += '<span><i class="material-icons md-30">&#xE1B7;</i></span>';
                    html2 += '</td>';

                    html2 += '<td class="TdPetImg">';
                        html2 += '<span>';
                            html2 += '<div class="MyPetImgFrame-1" ng-click="showInfowindow('+i+')">';
                                html2 += '<div class="MyPetImgFrame-1-1">';
                                    html2 += '<div class="MyPetImgFrame-1-1-1">';
                                        html2 += '<img src="./img/PtnMascot.png"/>';
                                    html2 += '</div>';
                                html2 += '</div>';
                            html2 += '</div>';
                        html2 += '</span>';
                    html2 += '</td>';

                    html2 += '<td class="TdPetInfo">';
                        html2 += '<div class="MyPetInfo-1">';
                            html2 += '<div class="MyPetInfo-1-1">';
                                html2 += '<div class="MyPetInfo-1-1-1">';
                                    html2 += '<table>';
                                        html2 += '<tr>';
                                            html2 += '<td class="MyPetInfoName-1">Name</td>';
                                            html2 += '<td class="MyPetInfoName-2">'+$scope.petLocation[i].pet_id+"_"+pet_name+'</a></td>';
                                        html2 += '</tr>';
                                        html2 += '<tr>';
                                            html2 += '<td class="MyPetInfoLast-1" ng-click="showInfowindow('+i+')">Updated</td>';
                                            html2 += '<td class="MyPetInfoLast-2" ng-click="showInfowindow('+i+')">'+date_time+'</a></td>';
                                        html2 += '</tr>';
                                    html2 += '</table>';
                                html2 += '</div>';
                            html2 += '</div>';
                        html2 += '</div>';
                    html2 += '</td>';
            html2 += '</tr>';*/

            google.maps.event.addListener(marker2,'click',function(e){
                infowindow.setContent(this.html);
                infowindow.open(map,this);
            });
        }

        //$("#divShow").html(html2);//+++

    }

    $scope.showInfowindow = function(index){

        infowindow.setContent(markers[index].html);
        infowindow.open(map,markers[index]);
        map.panTo(markers[index].getPosition());
         
    }

    $scope.currentLocation = function(){
        $scope.initMap();
        navigator.geolocation.getCurrentPosition(
                function(position){
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };

                    $scope.marker.setPosition(pos);
                    map.setCenter(pos);
                },function(){
                    handleLocationError(true, infowindow, map.getCenter());
                }
            );
        
    }

    $scope.getPetByUserIdSuccess = function(result){
        console.log("Pet Location");
        $scope.petLocation = result.data;
        console.log($scope.petLocation);
        $scope.selectPetLocation();
    }
    $scope.getPetByUserId = function(){
        console.log("Get Pet Location");
        var onSuccess = $scope.getPetByUserIdSuccess;
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host+"service/index.php/Gmap/getPetLocationById",
            method: 'POST',
            params: {
                username: localStorageFactory.get('userdata').username,
                APIKEY: 123456
            },
        onSuccess: onSuccess,
        onFailure: onFailure
        } 
        $rootScope.httpProcess(obj);
    }

    /*$scope.handleLocationError = function(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
    }*/

    //$window.location.href = $location.absUrl().replace('http', 'https');
    $scope.initMap(/*13.6510505,100.4927095*/);
    $scope.getPetByUserId();

    var timer;

    $scope.start = function() {
        timer = $interval(function() {
            console.log("Refresh Location");
            $scope.initMap()
        }, 5000);
    };
    $scope.stop = function() {
        $interval.cancel(timer);
    };

    //$scope.start();

});

