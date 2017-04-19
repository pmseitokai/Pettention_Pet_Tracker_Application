<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';

	class SignUp extends REST_Controller{

		public function __construct(){
			parent::__construct();

			$this->load->model('Mol_signup');

			$this->output->set_header('Access-Control-Allow-Methods : GET, POST');
			$this->output->set_header('Access-Control-Allow-Origin: *');
		}

		public function signup_post(){

			$username = $_POST['username'];
			$password = $_POST['password'];
			$firstname = $_POST['firstname'];
			$lastname = $_POST['lastname'];
			$nickname = $_POST['nickname'];
			$gender = $_POST['gender'];
			$email = $_POST['email'];
			//$address = NULL;
			//$phone = NULL;
			//$picture = $_POST['picture'];

			$arrData = array();
			$arrDB = array('username' , 'password' , 'firstname' , 'lastname' , 'nickname' , 'gender' , 'email' , 'address' , 'phone' , 'picture');

			foreach($arrDB as $value){
				$arrData[$value] = $this->input->post($value);
			}

			$arrUser = $this->Mol_signup->signup($arrData);

			if(is_null($arrUser)){
				$this->response(NULL, REST_Controller::HTTP_NO_CONTENT);
				//$this->response(NULL);
			}else{
				$this->response($arrUser['result'], REST_Controller::HTTP_OK );
				//$this->response($arrUser['result']);
			}
		}

	}
?>