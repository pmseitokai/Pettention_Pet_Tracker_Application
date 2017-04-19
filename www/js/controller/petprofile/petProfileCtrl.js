pettention.controller('petSelectCtrl', function ($scope, $state, $rootScope,  Scopes, localStorageFactory, $window) {
    console.log("Pet Select")

    $scope.petData = '';

    $scope.goToHome = function() {
        $rootScope.goState('home', false);
    }

    $scope.goToProfile = function(data) {
        Scopes.store('petdata', data);
        $rootScope.goState('petProfile', false);
    }

    $scope.goToAddPet = function() {
        $rootScope.goState('addPet', false);
    }

    $scope.getPetDataByUserIdSuccess = function(result){
        console.log("Pet Data");
        if(result.status==200){
            $scope.petData = result.data;
            for(var i = 0;i < $scope.petData.length;i++){
                if($scope.petData[i].gps_serial == null){
                   $scope.petData[i].gps_serial = "Not have gps.";
                }
            }
            console.log($scope.petData);
        }
        else{
            
        }
        
    }
    $scope.getPetDataByUserId = function(){
        console.log("Get Pet Data");
        var onSuccess = $scope.getPetDataByUserIdSuccess;
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host + "service/index.php/PetProfile/selectPetByUserId",
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

    $scope.deletePetByIdSuccess = function(result){
        if($window.confirm("Are you sure to delete this pet?")){
            $window("Delete Pet Success",$rootScope.goState('petSelect', false));
        }
    }
    $scope.deletePetById = function(pet_id){
        console.log("Delete Pet");
        var onSuccess = $scope.deletePetByIdSuccess;
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host + "service/index.php/PetProfile/deletePetById",
            method: 'POST',
            params: {
                pet_id: pet_id,
                APIKEY: 123456
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        }
        $rootScope.httpProcess(obj);
    }

    $scope.getPetDataByUserId();
});
pettention.controller('petAddCtrl', function ($scope, $state, $rootScope,  Scopes, localStorageFactory, $filter, $window) {
    console.log("Add Pet Page")

    $scope.petdata = {};

    $scope.currentDate = new Date().toISOString();
    $scope.currentDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");

    $scope.goToSelect = function() {
        $rootScope.goState('petSelect', false);
    }

    $scope.addPetCheck = function(){
        if(angular.isUndefined($scope.petdata.name) ||
            angular.isUndefined($scope.petdata.gender) ||
            angular.isUndefined($scope.petdata.type) ||
            angular.isUndefined($scope.petdata.birth_date)
            ){
                $scope.petdata.successMsg = "Please enter all field!!";
            }
        else{
            $scope.addPet();
        }
    }

    $scope.addPetSuccess = function(result){
        console.log("Pet Data");
        $scope.petdata.name = "";
        $scope.petdata.picture = "";
        $scope.petdata.gender = "";
        $scope.petdata.birth_date = "";
        $scope.petdata.detail = "";
        $scope.petdata.type = "";
        $window.alert("Add Pet Success !!",$rootScope.goState('petSelect', false))
    }
    $scope.addPet = function(){
        console.log("Add Pet");
        $scope.petdata.birth_date = new Date($scope.petdata.birth_date).toISOString();
        $scope.petdata.birth_date = $filter('date')($scope.petdata.birth_date, "yyyy-MM-dd");
        var onSuccess = $scope.addPetSuccess;
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host + "service/index.php/PetProfile/addPet",
            method: 'POST',
            params: {
                name: $scope.petdata.name,
                picture: $scope.petdata.picture,
                gender: $scope.petdata.gender,
                type: $scope.petdata.type,
                birth_date: $scope.petdata.birth_date,
                detail: $scope.petdata.detail,
                username: localStorageFactory.get('userdata').username,
                APIKEY: 123456
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        }
        $rootScope.httpProcess(obj);
    }

});
pettention.controller('petProfileCtrl', function ($scope, $state, $rootScope,  Scopes, localStorageFactory) {
    console.log("My Pet Page")

    var missing;

    $scope.pet_id = Scopes.get('petdata');
    console.log($scope.pet_id);
    $scope.petData = '';

    $scope.goToHome = function() {
        $rootScope.goState('home', false);
    }

    $scope.goToSelect = function() {
        $rootScope.goState('petSelect', false);
    }

    $scope.goToEdit = function() {
        Scopes.store('pet_id', $scope.pet_id);
        $rootScope.goState('petProfileEdit', false);
    }

    $scope.getPetDataByIdSuccess = function(result){
        console.log("Pet Data");
        $scope.petData = result.data[0];
        console.log($scope.petData);
        if($scope.petData.gender == "M" || $scope.petData.gender == "m"){
            $scope.petData.gender = "Male";
        }        
        else{
            $scope.petData.gender = "Female";
        }
        if($scope.petData.missing == 1){
            $scope.petData.missing_msg = "Missing !!";
            $scope.petData.missing_button_msg = "Found.";
        }
        else{
            $scope.petData.missing_msg = "Normal.";
            $scope.petData.missing_button_msg = "Missing !!";
        }
    }
    $scope.getPetDataById = function(){
        console.log("Get Pet Data");
        var onSuccess = $scope.getPetDataByIdSuccess;
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host + "service/index.php/PetProfile/selectPetById",
            method: 'POST',
            params: {
                pet_id: $scope.pet_id,
                APIKEY: 123456
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        }
        $rootScope.httpProcess(obj);
    }

    $scope.deleteGPSSerialSuccess = function(result){
        console.log("Delete GPS Success");
        $scope.getPetDataById();
    }
    $scope.deleteGPSSerial = function(){
        console.log("Delete GPS Serial");
        var onSuccess = $scope.deleteGPSSerialSuccess;
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host + "service/index.php/PetProfile/deleteGPSSerialById",
            method: 'POST',
            params: {
                pet_id: $scope.pet_id,
                APIKEY: 123456
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        }
        $rootScope.httpProcess(obj);
    }

    $scope.changeMissingSuccess = function(result){
        if($scope.petData.missing == 1){
            $scope.petData.missing_msg = "Missing !!";
            $scope.petData.missing_button_msg = "Found.";
        }
        else{
            $scope.petData.missing_msg = "Normal.";
            $scope.petData.missing_button_msg = "Missing !!";
        }
    }
    $scope.changeMissing = function(){
        console.log("Change Missing Status");
        if($scope.petData.missing == 1){
            missing = 0;
            $scope.petData.missing = 0;
        }
        else{
            missing = 1;
            $scope.petData.missing = 1;
        }
        var onSuccess = $scope.changeMissingSuccess;
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host + "service/index.php/PetProfile/changeMissingById",
            method: 'POST',
            params: {
                pet_id: $scope.pet_id,
                missing: missing,
                APIKEY: 123456
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        }
        $rootScope.httpProcess(obj);
    }

    $scope.getPetDataById();
});

pettention.controller('petProfileEditCtrl', function ($scope, $state, $rootScope,  Scopes, localStorageFactory, $filter, Upload, $window) {
    console.log("Edit Pet Page")

    $scope.pet_id = Scopes.get('pet_id');
	$scope.petData = '';

    $scope.petData.progressPercentage = 0;
    var profilePic = "profile_"+$scope.pet_id;
    var picType = "";
    var picUrl = "";

    /////////////////////////////upload//////////////////////////////////////////
    $scope.submit = function() {
      if ($scope.petData.picFile) {
        $scope.upload($scope.petData.picFile);
      }
    };

    // upload on file select or drop
    $scope.upload = function (file) {
        Upload.upload({
            url: $rootScope.host+'service/application/libraries/upload_pet.php?pet_id='+$scope.pet_id,
            data: {file: file,
                    name: profilePic}
        }).then(function (resp) {
            console.log(' Response: '+resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            $scope.petData.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + $scope.petData.progressPercentage + '% ' + evt.config.data.file.name);
            if($scope.petData.progressPercentage == 100){
                $scope.petData.editMessage = "Edit Success!!";
                $window.alert("Edit Successful.",$rootScope.goState('petProfile', false));
            }
        });
    };
    /////////////////////////////////////////////////////////////////////////////

    $scope.currentDate = new Date().toISOString();
    $scope.currentDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");

    $scope.goToPetProfile = function() {
        $rootScope.goState('petProfile', false);
    }

    $scope.getPetDataByIdSuccess = function(result){
    	console.log("Pet Data");
        $scope.petData = result.data[0];
        $scope.petData.progressPercentage = 0;
        /*$scope.petData.birth_date = new Date($scope.petData.birth_date).toISOString();
    	$scope.petData.birth_date = $filter('date')($scope.petData.birth_date, "yyyy-MM-dd");*/
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
    			pet_id: $scope.pet_id,
    			APIKEY: 123456
    		},
    		onSuccess: onSuccess,
    		onFailure: onFailure
    	}
    	$rootScope.httpProcess(obj);
    }

    $scope.editPetDataByIdSuccess = function(result){
        console.log("Edit Pet Data Success");
        if(!angular.isUndefined($scope.petData.picFile)){
                $scope.submit();
        }
        $scope.petData.name = "";
        $scope.petData.picture = "";
        $scope.petData.gender = "";
        $scope.petData.type = "";
        $scope.petData.birth_date = "";
        $scope.petData.detail = "";
        $scope.petData.gps_serial = "";
        $scope.petData.picFile = "";       
    }
    $scope.editPetDataById = function(){
        console.log("Edit Pet Data");
        if(!angular.isUndefined($scope.petData.picFile)){
            picType = $scope.petData.picFile.name.substr($scope.petData.picFile.name.lastIndexOf('.')+1);
            picUrl = 'https://pettention.ga/pettention/img/profile/pet/'+profilePic+'.'+picType;
        }
        else{
            picUrl = $scope.petData.picture;
        }
        $scope.petData.birth_date = new Date($scope.petData.birth_date).toISOString();
        $scope.petData.birth_date = $filter('date')($scope.petData.birth_date, "yyyy-MM-dd");
        var onSuccess = $scope.editPetDataByIdSuccess;
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host + "service/index.php/PetProfile/editPetById",
            method: 'POST',
            params: {
                pet_id: $scope.pet_id,
                picture: picUrl,
                name: $scope.petData.name,
                gender: $scope.petData.gender,
                type: $scope.petData.type,
                birth_date: $scope.petData.birth_date,
                detail: $scope.petData.detail,
                gps_serial: $scope.petData.gps_serial,
                APIKEY: 123456
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        }
        $rootScope.httpProcess(obj);
    }

    $scope.checkGpsSerialSuccess = function(result){
        console.log(result);
        if(result.status==200){
            $scope.getPetBySerial($scope.petData.gps_serial);
        }
        else{
            $scope.petData.checkMessage = "The gps serial is wrong.";
            $scope.petData.gps_serial = "";
        }
    }
    $scope.checkGpsSerial = function(gps_serial){
        console.log("Check GPS Serial");
        console.log(gps_serial);
        var onSuccess = $scope.checkGpsSerialSuccess;
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host + "service/index.php/Gmap/checkSerial",
            method: 'POST',
            params: {
                gps_serial: $scope.petData.gps_serial,
                APIKEY: 123456
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        }
        $rootScope.httpProcess(obj);
    }

    $scope.getPetBySerialSuccess = function(result){
        console.log(result);
        if(result.status==200){
            $scope.petData.checkMessage = "This serial is already use."
            $scope.petData.gps_serial = "";
        }
        else{
            $scope.petData.checkMessage = "This serial can use";
        }
    }
    $scope.getPetBySerial = function(gps_serial){
        console.log("Get pet by serial");
        var onSuccess = $scope.getPetBySerialSuccess;
        var onFailure = $rootScope.onFailure;
        var obj = {
            url: $rootScope.host + "service/index.php/PetProfile/getPetBySerial",
            method: 'POST',
            params: {
                gps_serial: gps_serial,
                APIKEY: 123456
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        }
        $rootScope.httpProcess(obj);
    }

    $scope.getPetDataById();
});

