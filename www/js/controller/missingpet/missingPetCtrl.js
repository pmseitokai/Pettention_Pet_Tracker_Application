pettention.controller('missingPetCtrl', function ($scope, $state, $rootScope,  Scopes, localStorageFactory, $mdDialog) {
    console.log("Mising Pet Page")

    //$scope.username = localStorageFactory.get('userdata').username;
    $scope.petData = '';

    $scope.goToHome = function() {
        $rootScope.goState('home', false);
    }

    $scope.goToSearch = function(){
        $rootScope.goState('missingpetsearch',false)
    }

    $scope.goToSearchType = function(){
        $rootScope.goState('missingpetsearchtype',false)
    }

    $scope.goToSearchId = function(){
        $rootScope.goState('missingpetsearchid',false)
    }

    $scope.goToMissingTrack = function(petData) {
    	Scopes.store('petData', petData);
        $rootScope.goState('missingpettrack', false);
    }

    $scope.getMissingPetDataSuccess = function(result){
        console.log("Pet Data");
        if(result.status==200){
            $scope.petData = result.data;
            console.log($scope.petData);
        }
        else{
            
        }
    }
    $scope.getMissingPetData = function(){
        console.log("Get Missing Pet Data");
        var onSuccess = $scope.getMissingPetDataSuccess;
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host + "service/index.php/PetProfile/selectMissingPet",
            method: 'POST',
            params: {
                APIKEY: 123456
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        }
        $rootScope.httpProcess(obj);
    }

    $scope.getMissingPetData();


});

pettention.controller('missingPetTrackCtrl', function ($scope, $state, $rootScope,  Scopes, localStorageFactory, $mdDialog) {
    console.log("Mising Pet Page")

    $scope.petData = Scopes.get('petData');
    console.log($scope.petData);

    $scope.userData = '';

    $scope.petLocation = '';

    var infowindow = "";
    var map = "";
    /*var lat = parseFloat($scope.petLocation.latitude);
    var lng = parseFloat($scope.petLocation.longitude);*/
    var marker;

    $scope.goToMissing = function() {
        $rootScope.goState('missingpet', false);
    }

    $scope.initMap = function(lat,lng){
        map = new google.maps.Map(document.getElementById('map_canvas'),
        {
            center: {lat: lat,
            		 lng: lng},
            zoom: 17
        });

        $scope.image = {
            url: 'img/PinMap-Pet1.png',
            size: new google.maps.Size(50, 50),//50,50
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(25, 50), //0, 50
            scaledSize: new google.maps.Size(50, 50)//0,50
        };

		var latlng = new google.maps.LatLng(lat,lng);

        marker = new google.maps.Marker({
            map: map,
            icon: $scope.image,
            html: 'PET ID: '+$scope.petData.pet_id+', '+'PET NAME: '+$scope.petData.name, 
            position:latlng,
        });

        infowindow = new google.maps.InfoWindow();
        infowindow.setContent(marker.html);
        infowindow.open(map,marker);

    }

	$scope.showInfowindow = function(){

        infowindow.setContent(marker.html);   
    }

    $scope.getUserDataByPetIdSuccess = function(result){
        console.log("Pet Data");
        if(result.status==200){
            $scope.userData = result.data[0];
            console.log($scope.userData);
            $scope.getPetLocationById();
        }
        else{
            
        }
    }
    $scope.getUserDataByPetId = function(){
        console.log("Get User Data");
        var onSuccess = $scope.getUserDataByPetIdSuccess;
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host + "service/index.php/PetProfile/selectUserByPetId",
            method: 'POST',
            params: {
                pet_id: $scope.petData.pet_id,
                APIKEY: 123456
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        }
        $rootScope.httpProcess(obj);
    }

    /*$scope.getPetDataByIdSuccess = function(result){
        console.log("Pet Data");
        $scope.petData = result.data[0];
        console.log($scope.petData);
    }
    $scope.getPetDataById = function(){
        console.log("Get Pet Data");
        var onSuccess = $scope.getPetDataByIdSuccess;
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host + "service/index.php/PetProfile/selectPetById",
            method: 'POST',
            params: {
                pet_id: $scope.petData.pet_id,
                APIKEY: 123456
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        }
        $rootScope.httpProcess(obj);
    }*/

    $scope.getPetLocationByIdSuccess = function(result){
        console.log("Pet Location");
        $scope.petLocation = result.data[0];
        console.log($scope.petLocation);
        if($scope.petLocation == null){
            Scopes.store('petData', $scope.petData);
            Scopes.store('userData', $scope.userData);
            $rootScope.goState('missingpettracknogps', false);
        }
        else{
            var lat = parseFloat($scope.petLocation.latitude);
            var lng = parseFloat($scope.petLocation.longitude);
            $scope.initMap(lat,lng);
        }
    }
    $scope.getPetLocationById = function(){
        console.log("Get Pet Location");
        var onSuccess = $scope.getPetLocationByIdSuccess;
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host + "service/index.php/PetProfile/selectPetLocationById",
            method: 'POST',
            params: {
                pet_id: $scope.petData.pet_id,
                APIKEY: 123456
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        }
        $rootScope.httpProcess(obj);
    }

    $scope.getUserDataByPetId();

});

pettention.controller('missingPetTrackNoGPSCtrl', function ($scope, $state, $rootScope,  Scopes, localStorageFactory, $mdDialog) {

    $scope.petData = Scopes.get('petData');
    $scope.userData = Scopes.get('userData');
    console.log($scope.petData);
    console.log($scope.userData);

    $scope.goToMissing = function() {
        $rootScope.goState('missingpet', false);
    }

});


pettention.controller('missingPetSearchCtrl', function ($scope, $state, $rootScope,  Scopes, localStorageFactory, $mdDialog) {

    console.log("Missing Pet Search");

    $scope.petData = '';
    $scope.searchMessage = "";

    $scope.missingPet;

    $scope.goToMissing = function() {
        $rootScope.goState('missingpet', false);
    }

    $scope.goToMissingTrack = function(petData) {
        Scopes.store('petData', petData);
        $rootScope.goState('missingpettrack', false);
    }

    /*$scope.getGPSSerialByIdSuccess = function(result){
        console.log("Get GSP Serial");
        if(result.status==200){
            $scope.petData.gps_serial = result.data[0].gps_serial;
            console.log($scope.petData.gps_serial);
        }
    }
    $scope.getGPSSerialById = function(){
        console.log("Get GPS Serial");
        var onSuccess = $scope.getGPSSerialByIdSuccess;
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host + "service/index.php/PetProfile/selectGPSSerialById",
            method: 'POST',
            params: {
                gps_id: $scope.petData.gps_id,
                APIKEY: 123456
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        }
        $rootScope.httpProcess(obj);
    }*/

    $scope.searchMissingPetByGPSIdSuccess = function(result){
        console.log("Get Missing Pet Data");
        if(result.status==200){
            $scope.searchMessage = "Found Missing Pet.";
            $scope.petData = result.data[0];
            console.log($scope.petData);
            $('#pet_data').html(
                '<table>'+
                    '<tr>'+
                        '<td rowspan="2">'+
                            'Picture: <img src="'+$scope.petData.picture+'" width="80px"'+
                            'height="100px">'+
                        '</td>'+
                        '<td>'+
                            'Pet ID : '+$scope.petData.pet_id+''+
                        '</td>'+
                        '<td>'+
                            '&nbsp;Name: '+$scope.petData.name+''+
                        '</td>'+
                    '<tr>'+
                '<br>');
            //$('#pet_data').css('missingPet') = "border:2px solid black";
            //$scope.missingPet = "border:2px solid red";
        }
        else{
            $scope.searchMessage = "Not Found.";
            $scope.petData = '';
            $('#pet_data').html("");
            //$('#pet_data').css('missingPet') = "";
            //$scope.missingPet = "";
        }
    }
    $scope.searchMissingPetByGPSId= function(){
        console.log("Get GPS Serial");
        var onSuccess = $scope.searchMissingPetByGPSIdSuccess;
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host + "service/index.php/PetProfile/searchMissingPetByGPSId",
            method: 'POST',
            params: {
                gps_id: $scope.petData.gps_id,
                APIKEY: 123456
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        }
        $rootScope.httpProcess(obj);
    }

});

pettention.controller('missingPetSearchTypeCtrl', function ($scope, $state, $rootScope,  Scopes, localStorageFactory, $mdDialog) {

    console.log("Missing Pet Type Search");

    $scope.petData = '';
    $scope.searchMessage = "";

    $scope.missingPet;

    $scope.goToMissing = function() {
        $rootScope.goState('missingpet', false);
    }

    $scope.goToMissingTrack = function(petData) {
        Scopes.store('petData', petData);
        $rootScope.goState('missingpettrack', false);
    }

    $scope.searchMissingPetByTypeSuccess = function(result){
        console.log("Get Missing Pet Data");
        console.log(result);
        $scope.petData = result.data;
        if(result.status==200){
            $scope.searchMessage = "Found Missing Pet.";
            /*var html2 = "";
            for(var i = 0;i < result.data.length;i++){
                html2 +=
                    '<table>'+
                        '<tr ng-click="goToMissingTrack($scope.petData['+i+'])+">'+
                            '<td rowspan="2">'+
                                'Picture: <img src="'+$scope.petData[i].picture+'" width="80px"'+
                                'height="100px">'+
                            '</td>'+
                            '<td>'+
                                'Pet ID : '+$scope.petData[i].pet_id+''+
                            '</td>'+
                            '<td>'+
                                '&nbsp;Name: '+$scope.petData[i].name+''+
                            '</td>'+
                        '<tr>'+
                    '<br>';
            }
            $('#pet_data').html(html2);*/
        }
        else{
            $scope.searchMessage = "Not Found.";
            $scope.petData = '';
            //$('#pet_data').html("");
            //$('#pet_data').css('missingPet') = "";
            //$scope.missingPet = "";
        }
    }
    $scope.searchMissingPetByType= function(){
        console.log("Get Missing Pet");
        var onSuccess = $scope.searchMissingPetByTypeSuccess;
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host + "service/index.php/PetProfile/searchMissingPetByType",
            method: 'POST',
            params: {
                type: $scope.petData.type,
                APIKEY: 123456
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        }
        $rootScope.httpProcess(obj);
    }

});

pettention.controller('missingPetSearchIdCtrl', function ($scope, $state, $rootScope,  Scopes, localStorageFactory, $mdDialog) {

    console.log("Missing Pet Search");

    $scope.petData = '';
    $scope.searchMessage = "";

    $scope.missingPet;

    $scope.goToMissing = function() {
        $rootScope.goState('missingpet', false);
    }

    $scope.goToMissingTrack = function(petData) {
        Scopes.store('petData', petData);
        $rootScope.goState('missingpettrack', false);
    }

    $scope.searchMissingPetByPetIdSuccess = function(result){
        console.log("Get Missing Pet Data");
        if(result.status==200){
            $scope.searchMessage = "Found Missing Pet.";
            $scope.petData = result.data[0];
            console.log($scope.petData);
            $('#pet_data').html(
                '<table>'+
                    '<tr>'+
                        '<td rowspan="2">'+
                            'Picture: <img src="'+$scope.petData.picture+'" width="80px"'+
                            'height="100px">'+
                        '</td>'+
                        '<td>'+
                            'Pet ID : '+$scope.petData.pet_id+''+
                        '</td>'+
                        '<td>'+
                            '&nbsp;Name: '+$scope.petData.name+''+
                        '</td>'+
                    '<tr>'+
                '<br>');
            //$('#pet_data').css('missingPet') = "border:2px solid black";
            //$scope.missingPet = "border:2px solid red";
        }
        else{
            $scope.searchMessage = "Not Found.";
            $scope.petData = '';
            $('#pet_data').html("");
            //$('#pet_data').css('missingPet') = "";
            //$scope.missingPet = "";
        }
    }
    $scope.searchMissingPetByPetId= function(){
        console.log("Get Missing Pet");
        var onSuccess = $scope.searchMissingPetByPetIdSuccess;
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host + "service/index.php/PetProfile/searchMissingPetById",
            method: 'POST',
            params: {
                pet_id: $scope.petData.pet_id,
                APIKEY: 123456
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        }
        $rootScope.httpProcess(obj);
    }

});
