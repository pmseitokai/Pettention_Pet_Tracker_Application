<?php
defined('BASEPATH') OR exit('No direct script access allowed');
// require APPPATH . '/libraries/REST_Public.php';

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	function __construct() {
		parent::__construct();
		
		// $this->output->set_header('Access-Control-Allow-Methods : GET, POST');
		// $this->output->set_header('Access-Control-Allow-Origin: *');

		/*$this->load->model('mol_user');
        $this->load->model('mol_assessment');*/
	}

	private function setResponseMsg($code, $desc, $data) {
		$responseMsg = array (
				'code' => $code,
				'description' => $desc,
				'data' => $data 
		);
		return $responseMsg;
	}

	public function index_post()
	{
		$username = $this->input->post('USERNAME');
		$password = hash('sha256', $this->input->post('PASSWORD'));
		
		$arrUser = $this->mol_user->selectUserByApp($username,$password);

		if(is_null($arrUser)){
			$responseMsg = $this->setResponseMsg ( 1, 'Login Error', NULL );
		}else{
			$arrUser['result'][0]['APIKEY'] = $this->mol_user->updateKeyByUserid($arrUser['result'][0]['USER_ID']);

			$responseMsg = $this->setResponseMsg ( 0, 'Login Success.', $arrUser['result'] );
		}
		$this->response($responseMsg);
	}
	public function testAjax()
	{
		$this->load->view('testAjax');
	}

//	public function testWorld()
//    {
//        for ($i=219; $i<=219; $i++){
//            $usr = $this->mol_user->selectUserById($i);
//            $phone = $usr['result'][0]['PHONE'];
//            $new_pwd = hash('sha256', $phone);
////        $new_pwd = hash('sha256', $_GET['pwd']);
//            $aff = $this->mol_user->updateUserById($i,["PASSWORD"=>$new_pwd]);
//        }
//        echo "Success!";
//    }

    function getAssessmentSuggestionPDF()
    {
        $this->load->helper('pdf_helper');
        /*
            ---- ---- ---- ----
            your code here
            ---- ---- ---- ----
        */
        $data['ASSESSMENT_GROUP_ID'] = 4;
        $data['CLASS_ID'] = 190;

        $sug = $this->mol_assessment->selectAssessmentSuggestion($data);
//        print_r($sug);
        $this->load->view('pdfreport', $sug);
    }
}
