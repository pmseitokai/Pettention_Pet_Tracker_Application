<?php

if ( !empty( $_FILES ) ) {

    $tempPath = $_FILES[ 'file' ][ 'tmp_name' ];
    $uploadPath = '/var/www/html/pettention/img/profile/user/';
    $username  = $_GET['username'];
    $extension = pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION);
    
    echo $filename;

	if(move_uploaded_file( $tempPath, $uploadPath."profile_".$username.'.'.$extension)){
		/*$answer = array( 'answer' => 'File transfer completed' );
		$json = json_encode( $answer );

		echo $json;*/
		echo 'File transfer completed';
	}else{
		echo 'Can not File transfer completed';
	}



} else {

    echo 'No files';

}

?>