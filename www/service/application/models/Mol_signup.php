<?php
defined('BASEPATH') OR exit('No direct script access allowed');
	
	class mol_signup extends CI_Model{

		function __construct()
	    {
	        parent::__construct();
	        $this->load->database();
	    }


		//Select User By Id
		public function signup($data) {

			$this->db->insert('user', $data);

			$num_affected = $this->db->affected_rows();
			return $num_affected;
		}
	}

?>