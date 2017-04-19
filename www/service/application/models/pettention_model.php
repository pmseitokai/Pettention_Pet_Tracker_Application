<?php
class pettention_model extends CI_Model {

        

        public function __construct()
        {
                // Call the CI_Model constructor
                parent::__construct();
        }

        public function list_user()
        {
                $this->db->select('*');
                $this->db->from('user');
                $query = $this->db->get();
                return $query->result();
        }

         public function Info_username()
        {
                
                $this->db->select('*');
                $this->db->from('user');
                $this->db->where('username');
                $query = $this->db->get();
                return $query->result();
        }
         public function Info_petByuser()
        {
                
                $this->db->select('*');
                $this->db->from('pet p');
                $this->db->join('user u', 'u.user_id = p.user_id');
                $query = $this->db->get();
                return $query->result();
        }

        public function selectUserByUserPass($username,$password) {
                $result = null;

                $this->db->where('username',$username);
                $this->db->where('password',$password);
                $query = $this->db->get('user');
                $rows = $query->num_rows();

                if ($rows > 0) {
                        $result['result'][0] = $query->row_array(0);
        }
        
                return $result;
        }

       



}
?>