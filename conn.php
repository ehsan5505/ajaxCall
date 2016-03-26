<?php
    //creating database connection
    
    define("USER",'root');
    define("PASS",'');
    define("DB",'std');
    define("SERVER",'localhost');
    define("TABLE","users");
    
class DbConn{
    private $link;
    private $result;
    
    function DbConn(){
        // $this->link = new mysqli();
        $this->link = mysqli_connect(SERVER,USER,PASS,DB); 
        if(!$this->link){
            die("Error in the connection: ".$this->link->mysqli_connect_error());
        }
    }
    
    function query($query){
        $this->result = $this->link->query($query);
        if(!$this->result){
            $this->get_error();
        }
        return true;
    }
    
    
    function get_error(){
        echo "ERROR OCCUR :".mysqli_error($this->link);
    }
    
    function fetch(){
        $resultSet = array();
        while($rs = mysqli_fetch_assoc($this->result)){
            $resultSet[] = $rs;
        }
        return $resultSet;
    }
}    

$con = new DbConn;

?>