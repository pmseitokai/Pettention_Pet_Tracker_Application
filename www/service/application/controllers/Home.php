<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';

	class Home extends REST_Controller{

		public function __construct(){
			parent::__construct();

			$this->load->model('Mol_home');

			$this->output->set_header('Access-Control-Allow-Methods : GET, POST');
			$this->output->set_header('Access-Control-Allow-Origin: *');
		}

		public function getUserById_post(){

			$username = $_POST['username'];

			$arrUser = $this->Mol_home->selectUserById($username);

			if(is_null($arrUser)){
				/*$this->response(NULL, REST_Controller::HTTP_NO_CONTENT);*/
				$this->response(NULL);
			}else{
				/*$this->response($arrUser['result'], REST_Controller::HTTP_OK );*/
				$this->response($arrUser['result']);
			}
		}

	}
?>