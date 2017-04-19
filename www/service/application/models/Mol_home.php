<?php
defined('BASEPATH') OR exit('No direct script access allowed');
	
	class mol_home extends CI_Model{

		function __construct()
	    {
	        parent::__construct();
	        $this->load->database();
	    }


		//Select User By Id
		public function selectUserById($username) {

			$this->db->where('username',$username);
			$query = $this->db->get('user');
			$rows = $query->num_rows();

		 	if ($rows > 0) {
		 		$result['result'][0] = $query->row_array(0);
	    	}

			return $result;
		}
	}

?>