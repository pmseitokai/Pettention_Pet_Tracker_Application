<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';

	class Gmap extends REST_Controller{

		public function __construct(){
			parent::__construct();

			$this->load->model('Mol_gmap');

			$this->output->set_header('Access-Control-Allow-Methods : GET, POST');
			$this->output->set_header('Access-Control-Allow-Origin: *');
		}

		public function getPetLocationById_post(){

			$username = $_POST['username'];

			$petLocation = $this->Mol_gmap->getPetLocationById($username);

			if(is_null($petLocation)){
				/*$this->response(NULL, REST_Controller::HTTP_NO_CONTENT);*/
				$this->response(NULL);
			}else{
				/*$this->response($arrUser['result'], REST_Controller::HTTP_OK );*/
				$this->response($petLocation['result']);
			}
		}

		public function checkSerial_post(){

			$gps_serial = $_POST['gps_serial'];

			$query = $this->Mol_gmap->checkSerial($gps_serial);

			if(is_null($query)){
				$this->response(NULL, REST_Controller::HTTP_NO_CONTENT);
				//$this->response(NULL);
			}else{
				$this->response($query['result'], REST_Controller::HTTP_OK );
				//$this->response($query['result']);
			}

		}
	}
?>