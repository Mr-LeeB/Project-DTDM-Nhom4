<?php
    date_default_timezone_set('America/New_York');
    
    ini_set('display_errors',1);
    ini_set('display_startup_errors',1);
    error_reporting(-1);
    
    require 'vendor/autoload.php';
    use Aws\DynamoDb\DynamoDbClient;
global $db;
$db = DynamoDbClient::factory(array(
	'region' => 'us-east-1',
	'version' => 'latest'
));

?>