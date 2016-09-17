<?php
/**
 * Books API Example
 *
 * @description Point HTTPS API calls to this file to process requests.
 * Database constants can be included in a seperate PHP file. 
 * Example: 'include 'db.config.php';
 *
 * @author 185SE14THST
 *
 * @copyright 2016-09-15
 *
 **/

/**
 * Parameters:
 *  @param object $mysqli - MySQLi object instance
 *  @param string $query - Database query string
 *  @param object $json - Database rows object
 *  @param int $count - Number counter for while loop conditions
 *  @param int $rowcount - Returned number of rows in database query
 *  @param object $row - Returned row from mysqli query
 *  @param array $data - Decoded JSON object
 *	@return object $returnData - Return form data array as object
 **/

/**
 * Notes:
 *  This file was modified for public use. Not all code will work
 *  with all enviroments and must me modified accordingly.
 **/



// API Call Selection comparing GET and PUT
// Optional Database constants file: include 'db.config.php';
switch ($_SERVER ['REQUEST_METHOD']) {
	case 'GET' :
        // Optional header information
		header ( 'Content-Type: application/json' );
		header ( 'Content-Type: text/javascript; charset=utf8' );
		header('Access-Control-Allow-Origin: http://www.example.com/');
		header ( 'Access-Control-Max-Age: 3628800' );
		header ( 'Access-Control-Allow-Methods: GET, POST, PUT, DELETE' );
		
		// Database connection
		$mysqli = new mysqli ( "DBHOST", "DBUSER", "DBPASS", "DBTABLE" );
		if ($mysqli->connect_errno) {
			printf ( "Connect failed: %s\n", $mysqli->connect_error );
			exit ();
		}
		
		// Get Data
        // Note: Origional code set to query against a seperate database server for reads and writes
		function getData() {
			global $mysqli;
			$query = "SELECT * FROM myApp.books"; // Query not optimized for performance
			$result = $mysqli->query ( $query );
			echo '[';
			$count = 0;
			$rowcount = mysqli_num_rows ( $result );
			while ( $row = $result->fetch_row () ) {
				$json = array (
						"id"              => $row [0],
						"name"            => $row [1],
						"isbn13"          => $row [2],                    
						"isbn"            => $row [3],
						"publisher"       => $row [4],
			                        "publisherDate"   => $row [5],
			                        "location"        => $row [6],
			                        "available"       => $row [7],
			                        "price"           => $row [8],
			                        "subject"         => $row [9],
			                        "shipping"        => $row [0]
						);
				$count ++;
				echo json_encode ( $json );
				if ($count !== $rowcount) {
					echo ',';
				}
			}
			echo ']';
			$result->close ();
		}
		
		getData ();
		break;
	
	case 'POST' :
		// Database connection
		$mysqli = new mysqli ( "DBHOST", "DBUSER", "DBPASS", "DBTABLE" );
		if ($mysqli->connect_errno) {
			printf ( "Connect failed: %s\n", $mysqli->connect_error );
			exit ();
		}
        
        // Get Data
        // Note: Origional code set to query against a seperate database server for reads and writes
		function postData() {
			global $mysqli;
			$data = json_decode ( file_get_contents ( "php://input" ) );
			$query = "INSERT INTO `myApp`.`books` ";
            $query .= "(
                            `name`, 
                            `isbn13`, 
                            `text`, 
                            `publisher`,
                            `publisherDate`, 
                            `location`, 
                            `available`, 
                            `price` ,
                            `shipping`
                        ) VALUES ";
			$query .= "(
                            '$data->newName', 
                            '$data->newISBN13', 
                            '$data->newText', 
                            '$data->newPublisher'
                            '$data->newPublisherDate', 
                            '$data->newLocation', 
                            '$data->newAvailable', 
                            '$data->newPrice'
                            '$data->newShipping'                            
                        )";
			($result = $mysqli->query ( $query ));
		}
        
		postData ();
		break;
}
?>
