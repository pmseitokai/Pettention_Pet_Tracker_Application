<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';

	class PetProfile extends REST_Controller{

		public function __construct(){
			parent::__construct();

			$this->load->model('Mol_petprofile');

			$this->output->set_header('Access-Control-Allow-Methods : GET, POST');
			$this->output->set_header('Access-Control-Allow-Origin: *');
		}

		public function selectPetByUserId_post(){

			$result = array();

			$username = $_POST['username'];

			$arrPet = $this->Mol_petprofile->selectPetByUserId($username);

			if(is_null($arrPet)){
				/*$this->response(NULL, REST_Controller::HTTP_NO_CONTENT);*/
				$this->response(NULL);
			}else{
				/*$this->response($arrUser['result'], REST_Controller::HTTP_OK );*/
				$this->response($arrPet['result']);
			}
		}

		public function selectPetById_post(){

			$pet_id = $_POST['pet_id'];

			$arrPet = $this->Mol_petprofile->selectPetById($pet_id);

			if(is_null($arrPet)){
				$this->response(NULL, REST_Controller::HTTP_NO_CONTENT);
				//$this->response(NULL);
			}else{
				$this->response($arrPet['result'], REST_Controller::HTTP_OK );
				//$this->response($arrPet['result']);
			}
		}

		public function editPetById_post(){
			$picture = $_POST['picture'];
			$pet_id = $_POST['pet_id'];
			$name = $_POST['name'];
			$gender = $_POST['gender'];
			$type = $_POST['type'];
			$birth_date = $_POST['birth_date'];
			$detail = $_POST['detail'];
			$gps_serial = $_POST['gps_serial'];

			$arrData = array();
			$arrDB = array('name' , 'gender' , 'type' , 'birth_date' , 'detail' , 'picture' , 'gps_serial');

			foreach($arrDB as $value){
				$arrData[$value] = $this->input->post($value);
			}

			$editPet = $this->Mol_petprofile->editPetById($pet_id, $arrData);

			if(is_null($editPet)){
				$this->response(NULL, REST_Controller::HTTP_NO_CONTENT);
				//$this->response(NULL);
			}else{
				$this->response($editPet['result'], REST_Controller::HTTP_OK );
				//$this->response($editUser);
			}
		}

		public function addPet_post(){
			$name = $_POST['name'];
			$picture = $_POST['picture'];
			$gender = $_POST['gender'];
			$type = $_POST['type'];
			$birth_date = $_POST['birth_date'];
			$detail = $_POST['detail'];
			$username = $_POST['username'];


			$arrData = array();
			$arrDB = array('name' , 'gender' , 'type' , 'birth_date' , 'detail' , 'username' , 'picture');

			foreach($arrDB as $value){
				$arrData[$value] = $this->input->post($value);
			}

			$addPet = $this->Mol_petprofile->addPet($arrData);

			if(is_null($addPet)){
				/*$this->response(NULL, REST_Controller::HTTP_NO_CONTENT);*/
				$this->response(NULL);
			}else{
				/*$this->response($arrUser['result'], REST_Controller::HTTP_OK );*/
				$this->response($addPet);
			}
		}

		public function changeMissingById_post(){
			$pet_id = $_POST['pet_id'];
			$missing = $_POST['missing'];
		
			$data = array('missing' => $this->input->post('missing'),);

			$changeMissing = $this->Mol_petprofile->changeMissing($pet_id,$data);

			if(is_null($changeMissing)){
				$this->response(NULL, REST_Controller::HTTP_NO_CONTENT);
				//$this->response(NULL);
			}else{
				$this->response($changeMissing['result'], REST_Controller::HTTP_OK );
				//$this->response($addPet);
			}

		}

		public function selectMissingPet_post(){
			$result = array();

			$arrPet = $this->Mol_petprofile->selectMissingPet();

			if(is_null($arrPet)){
				$this->response(NULL, REST_Controller::HTTP_NO_CONTENT);
				//$this->response(NULL);
			}else{
				$this->response($arrPet['result'], REST_Controller::HTTP_OK );
				//$this->response($arrPet['result']);
			}
		}

		public function selectUserByPetId_post(){
			$pet_id = $_POST['pet_id'];

			$arrPet = $this->Mol_petprofile->selectUserByPetId($pet_id);

			if(is_null($arrPet)){
				$this->response(NULL, REST_Controller::HTTP_NO_CONTENT);
				//$this->response(NULL);
			}else{
				$this->response($arrPet['result'], REST_Controller::HTTP_OK );
				//$this->response($arrPet['result']);
			}
		}

		public function selectPetLocationById_post(){
			$pet_id = $_POST['pet_id'];

			$arrPet = $this->Mol_petprofile->selectPetLocationById($pet_id);

			if(is_null($arrPet)){
				$this->response(NULL, REST_Controller::HTTP_NO_CONTENT);
				//$this->response(NULL);
			}else{
				$this->response($arrPet['result'], REST_Controller::HTTP_OK );
				//$this->response($arrPet['result']);
			}
		}

		public function selectGPSSerialById_post(){
			$gps_id = $_POST['gps_id'];

			$arrPet = $this->Mol_petprofile->selectGPSSerialById($gps_id);

			if(is_null($arrPet)){
				$this->response(NULL, REST_Controller::HTTP_NO_CONTENT);
				//$this->response(NULL);
			}else{
				$this->response($arrPet['result'], REST_Controller::HTTP_OK );
				//$this->response($arrPet['result']);
			}
		}

		public function searchMissingPetByGPSId_post(){
			$gps_id = $_POST['gps_id'];

			$arrPet = $this->Mol_petprofile->searchMissingPetByGPSId($gps_id);

			if(is_null($arrPet)){
				$this->response(NULL, REST_Controller::HTTP_NO_CONTENT);
				//$this->response(NULL);
			}else{
				$this->response($arrPet['result'], REST_Controller::HTTP_OK );
				//$this->response($arrPet['result']);
			}

		}

		public function deleteGPSSerialById_post(){
			$pet_id = $_POST['pet_id'];
			$gps_serial = NULL;

			$data = array('gps_serial' => NULL);

			$arrPet = $this->Mol_petprofile->deleteGPSSerialById($pet_id,$data);

			if(is_null($arrPet)){
				$this->response(NULL, REST_Controller::HTTP_NO_CONTENT);
				//$this->response(NULL);
			}else{
				$this->response($arrPet['result'], REST_Controller::HTTP_OK );
				//$this->response($arrPet['result']);
			}
		}

		public function deletePetById_post(){
			$pet_id = $_POST['pet_id'];

			$arrPet = $this->Mol_petprofile->deletePetById($pet_id);

			if(is_null($arrPet)){
				$this->response(NULL, REST_Controller::HTTP_NO_CONTENT);
				//$this->response(NULL);
			}else{
				$this->response($arrPet['result'], REST_Controller::HTTP_OK );
				//$this->response($arrPet['result']);
			}
		}

		public function getPetBySerial_post(){
			$gps_serial = $_POST['gps_serial'];

			$arrPet = $this->Mol_petprofile->getPetBySerial($gps_serial);

			if(is_null($arrPet)){
				$this->response(NULL, REST_Controller::HTTP_NO_CONTENT);
				//$this->response(NULL);
			}else{
				$this->response($arrPet['result'], REST_Controller::HTTP_OK );
				//$this->response($arrPet['result']);
			}
		}

		public function searchMissingPetByType_post(){
			$type = $_POST['type'];

			$arrPet = $this->Mol_petprofile->searchMissingPetByType($type);

			if(is_null($arrPet)){
				$this->response(NULL, REST_Controller::HTTP_NO_CONTENT);
				//$this->response(NULL);
			}else{
				$this->response($arrPet['result'], REST_Controller::HTTP_OK );
				//$this->response($arrPet['result']);
			}
		}

		public function searchMissingPetById_post(){
			$pet_id = $_POST['pet_id'];

			$arrPet = $this->Mol_petprofile->searchMissingPetById($pet_id);

			if(is_null($arrPet)){
				$this->response(NULL, REST_Controller::HTTP_NO_CONTENT);
				//$this->response(NULL);
			}else{
				$this->response($arrPet['result'], REST_Controller::HTTP_OK );
				//$this->response($arrPet['result']);
			}
		}

	}
?>