<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';

	class UserProfile extends REST_Controller{

		public function __construct(){
			parent::__construct();

			$this->load->model('Mol_userprofile');

			$this->output->set_header('Access-Control-Allow-Methods : GET, POST');
			$this->output->set_header('Access-Control-Allow-Origin: *');
		}

		public function getUserById_post(){

			$username = $_POST['username'];

			$arrUser = $this->Mol_userprofile->selectUserById($username);

			if(is_null($arrUser)){
				$this->response(NULL, REST_Controller::HTTP_NO_CONTENT);
				//$this->response(NULL);
			}else{
				$this->response($arrUser['result'], REST_Controller::HTTP_OK );
				//$this->response($arrUser['result']);
			}
		}

		public function getUserByEmail_post(){

			$username = $_POST['email'];

			$arrUser = $this->Mol_userprofile->selectUserByEmail($username);

			if(is_null($arrUser)){
				$this->response(NULL, REST_Controller::HTTP_NO_CONTENT);
				//$this->response(NULL);
			}else{
				$this->response($arrUser['result'], REST_Controller::HTTP_OK );
				//$this->response($arrUser['result']);
			}
		}

		public function editUserById_post(){
			$picture = $_POST['picture'];
			$username = $_POST['username'];
			$password = $_POST['password'];
			$firstname = $_POST['firstname'];
			$lastname = $_POST['lastname'];
			$nickname = $_POST['nickname'];
			$gender = $_POST['gender'];
			$email = $_POST['email'];
			$address = $_POST['address'];
			$phone = $_POST['phone'];
			$detail = $_POST['detail'];

			$arrData = array();
			$arrDB = array('username' , 'password' , 'firstname' , 'lastname' , 'nickname' , 'gender' , 'email' , 'address' , 'phone' , 'picture' , 'detail');

			foreach($arrDB as $value){
				$arrData[$value] = $this->input->post($value);
			}

			$editUser = $this->Mol_userprofile->editUserById($username , $arrData);

			if(is_null($editUser)){
				$this->response(NULL, REST_Controller::HTTP_NO_CONTENT);
				//$this->response(NULL);
			}else{
				$this->response($editUser['result'], REST_Controller::HTTP_OK );
				//$this->response($editUser);
			}
		}

	}
?>