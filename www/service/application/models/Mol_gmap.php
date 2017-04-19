<?php
defined('BASEPATH') OR exit('No direct script access allowed');
	
	class mol_gmap extends CI_Model{

		function __construct()
	    {
	        parent::__construct();
	        $this->load->database();
	    }


		//Select User By Id
		public function getPetLocationById($username) {

			$this->db->select('A.pet_id , A.name  , A.picture , B.date_time , B.latitude , B.longitude');
			$this->db->from('pet A');
			$this->db->join('track B','B.gps_serial = A.gps_serial');
			$this->db->where('A.username',$username);

			$query = $this->db->get();

			$rows = $query->num_rows();

		 	if ($rows > 0) {
		 		for ($i=0; $i < $rows; $i++) { 
                	$result['result'][$i] = $query->row_array($i);
            	}
	    	}

			return $result;
		}

		//Check serial
		public function checkSerial($gps_serial){

			$this->db->where('gps_serial', $gps_serial);

			$query = $this->db->get('track');

			$rows = $query->num_rows();

			if($rows > 0){
				$result['result'][0] = $query->row_array(0);
			}

			return $result;

		}
	}

?>