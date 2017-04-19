<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pettention extends CI_Controller {

	public function __construct()
        {
                // Call the CI_Model constructor
                parent::__construct();
                $this->load->model('pettention_model');
        }

		public function index()
	{
		$this->load->view('welcome_message');
	}
	

	public function user()
	{
		$this->load->model('pettention_model');
		$data['query'] = $this->pettention_model->list_user();
		print_r($data);
	}

	
	public function showPet()
	{
		echo "showPet";
	}

	public function showLocation()
	{
		echo "ShowLocation";
	}
	public function Infouser()
	{
		$this->load->model('pettention_model');
		$data['query'] = $this->pettention_model->Info_username();
		print_r($data);
	}
	public function Info_petByuser()
	{
		$this->load->model('pettention_model');
		$data['query'] = $this->pettention_model->Info_petByuser();
		print_r($data);
	}
	public function getUserByUserPass_post() 
	{
		$username = $_POST['username'];
		$password = $_POST['password'];
		if ($username == "" || $password == ""){
        	$responseMsg = $this->setResponseMsg ( 1, 'Not all field were entered.', NULL );
        }
	    else{
				$arrUser = $this->pettention_model->selectUserByUserPass($username,$password);

			if(is_null($arrUser)){
				$responseMsg = $this->setResponseMsg ( 1, 'Username or Password is incorrect.', NULL );
				
			}else{
				$responseMsg = $this->setResponseMsg ( 0, 'Login Success.', $arrUser['result'] );
				
			}
		}
		$this->response($responseMsg);
	}
}
