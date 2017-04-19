pettention.controller('hospitalCtrl', function ($scope, $state, $rootScope,  Scopes, localStorageFactory, $window, $location, $timeout, $interval) {
    console.log("Nearby Hospital")

    $scope.goToHome =function() {
        $scope.stop();
        $rootScope.goState('home', false);
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

    $scope.currentLocation = function(){
        /*navigator.geolocation.getCurrentPosition(
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
        */
        $scope.initMap();
    }


    $scope.initMap();

    var timer;

    $scope.start = function() {
        timer = $interval(function() {
            console.log("Refresh Location");
            $scope.initMap()
        }, 10000);
    };
    $scope.stop = function() {
        $interval.cancel(timer);
    };

});

