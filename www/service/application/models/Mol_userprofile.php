<?php
defined('BASEPATH') OR exit('No direct script access allowed');
	
	class mol_userprofile extends CI_Model{

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

			if(empty($rows)){
				return NULL;
			}
			else{
				if ($rows > 0) {
		 			$result['result'][0] = $query->row_array(0);
	    		}
				return $result;
			}

		 	
		}

		//Select User By Email
		public function selectUserByEmail($email) {

			$this->db->where('email',$email);
			$query = $this->db->get('user');
			$rows = $query->num_rows();

			if(empty($rows)){
				return NULL;
			}
			else{
				if ($rows > 0) {
		 			$result['result'][0] = $query->row_array(0);
	    		}
				return $result;
			}

		 	
		}

		//Edit user by id
		public function editUserById($username , $data){

			$this->db->where('username', $username);
			$this->db->update('user', $data);
			$num_affected = $this->db->affected_rows();
			return $num_affected;

		}
	}

?>