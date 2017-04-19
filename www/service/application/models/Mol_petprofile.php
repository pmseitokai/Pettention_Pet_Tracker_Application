<?php
defined('BASEPATH') OR exit('No direct script access allowed');
	
	class mol_petprofile extends CI_Model{

		function __construct()
	    {
	        parent::__construct();
	        $this->load->database();
	    }


	    //Select Pet By UserId
		public function selectPetByUserId($username) {

			$this->db->select('pet_id , name  , picture , gps_serial');
			/*$this->db->from('user A');
			$this->db->join('pet B','B.username = A.username');*/
			$this->db->where('username',$username);

			$query = $this->db->get('pet');

			$rows = $query->num_rows();

		 	if ($rows > 0) {
		 		//$result['result'][0] = $query->row_array(0);
				for ($i=0; $i < $rows; $i++) { 
            		$result['result'][$i] = $query->row_array($i);
        		}
	    	}

			return $result;
		}

		//Select Pet By Id
		public function selectPetById($pet_id) {

			$this->db->where('pet_id',$pet_id);
			$query = $this->db->get('pet');
			$rows = $query->num_rows();

		 	if ($rows > 0) {
		 		$result['result'][0] = $query->row_array(0);
	    	}

			return $result;
		}

		//Edit user by id
		public function editPetById($pet_id , $data){

			$this->db->where('pet_id', $pet_id);
			$this->db->update('pet', $data);
			$num_affected = $this->db->affected_rows();
			return $num_affected;

		}

		//Add pet
		public function addPet($data){

			$this->db->insert('pet', $data);
			$num_affected = $this->db->affected_rows();
			return $num_affected;

		}

		//Change Missing Status
		public function changeMissing($pet_id,$data){

			$this->db->where('pet_id', $pet_id);
			$this->db->update('pet', $data);
			$num_affected = $this->db->affected_rows();
			return $num_affected;

		}

		//Select Missing Pet
		public function selectMissingPet(){
			/*$this->db->select('A.pet_id , A.name  , A.picture , B.date_time , B.latitude , B.longitude');
			$this->db->from('pet A');
			$this->db->join('track B','B.gps_serial = A.gps_serial');
			$this->db->where('A.missing', 1);

			$query = $this->db->get();

			$rows = $query->num_rows();

		 	if ($rows > 0) {
		 		for ($i=0; $i < $rows; $i++) { 
                	$result['result'][$i] = $query->row_array($i);
            	}
	    	}

			return $result;*/

			$this->db->where('missing', 1);

			$query = $this->db->get('pet');

			$rows = $query->num_rows();

		 	if ($rows > 0) {
		 		for ($i=0; $i < $rows; $i++) { 
                	$result['result'][$i] = $query->row_array($i);
            	}
	    	}

			return $result;
		}

		//Get user by pet id
		public function selectUserByPetId($pet_id){
			$this->db->select('A.username , A.firstname , A.lastname , A.nickname , A.email , A.phone , A.detail , A.picture');
			$this->db->from('pet B');
			$this->db->join('user A','A.username = B.username');
			$this->db->where('B.pet_id',$pet_id);

			$query = $this->db->get();

			$rows = $query->num_rows();

		 	if ($rows > 0) {
		 		$result['result'][0] = $query->row_array(0);
	    	}

			return $result;
		}

		//Get Location by id
		public function selectPetLocationById($pet_id){
			$this->db->select('B.latitude , B.longitude , B.date_time');
			$this->db->from('track B');
			$this->db->join('pet A','A.gps_serial = B.gps_serial');
			$this->db->where('A.pet_id',$pet_id);

			$query = $this->db->get();

			$rows = $query->num_rows();

		 	if ($rows > 0) {
		 		$result['result'][0] = $query->row_array(0);
	    	}

			return $result;
		}

		//Get GPS Serial By ID
		public function selectGPSSerialById($gps_id){
			$this->db->where('gps_id',$gps_id);
			$query = $this->db->get('track');

			$rows = $query->num_rows();

		 	if ($rows > 0) {
		 		for ($i=0; $i < $rows; $i++) { 
                	$result['result'][$i] = $query->row_array($i);
            	}
	    	}

	    	return $result;
		}

		//Get Missing Pet By GPS ID
		public function searchMissingPetByGPSId($gps_id){
			$this->db->select('B.pet_id , B.picture , B.name');
			$this->db->from('track A');
			$this->db->join('pet B','A.gps_serial = B.gps_serial');
			$this->db->where('A.gps_id',$gps_id);
			$this->db->where('B.missing',1);


			$query = $this->db->get();

			$rows = $query->num_rows();

		 	if ($rows > 0) {
		 		for ($i=0; $i < $rows; $i++) { 
                	$result['result'][$i] = $query->row_array($i);
            	}
	    	}

	    	return $result;
		}

		public function deleteGPSSerialById($pet_id,$data){

			$this->db->where('pet_id', $pet_id);
			$this->db->update('pet', $data);
			$num_affected = $this->db->affected_rows();
			return $num_affected;

		}

		public function deletePetById($pet_id){

			$this->db->where('pet_id', $pet_id);
			$this->db->delete('pet');
			$num_affected = $this->db->affected_rows();
			return $num_affected;
			
		}

		public function getPetBySerial($gps_serial){
			$this->db->where('gps_serial',$gps_serial);
			$query = $this->db->get('pet');

			$rows = $query->num_rows();

		 	if ($rows > 0) {
		 		for ($i=0; $i < $rows; $i++) { 
                	$result['result'][$i] = $query->row_array($i);
            	}
	    	}

	    	return $result;
		}

		public function searchMissingPetByType($type){
			$this->db->where('missing',1);
			$this->db->where('type',$type);
			$query = $this->db->get('pet');

			$rows = $query->num_rows();

		 	if ($rows > 0) {
		 		for ($i=0; $i < $rows; $i++) { 
                	$result['result'][$i] = $query->row_array($i);
            	}
	    	}

	    	return $result;
		}

		public function searchMissingPetById($pet_id){
			$this->db->where('missing',1);
			$this->db->where('pet_id',$pet_id);
			$query = $this->db->get('pet');

			$rows = $query->num_rows();

		 	if ($rows > 0) {
		 		for ($i=0; $i < $rows; $i++) { 
                	$result['result'][$i] = $query->row_array($i);
            	}
	    	}

	    	return $result;
		}
	}

?>