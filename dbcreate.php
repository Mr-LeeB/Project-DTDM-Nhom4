<?php
    date_default_timezone_set('America/New_York');
    
    ini_set('display_errors',1);
    ini_set('display_startup_errors',1);
    error_reporting(-1);
    
    require 'vendor/autoload.php';
    use Aws\DynamoDb\DynamoDbClient;
    
    $client = DynamoDbClient::factory(array(
        'region' => 'us-east-1',
        'version' => 'latest'
    ));
    
    $tableNames = array();
    
    $tableName = 'sinhvien';
    echo "Creating table $tableName. " . PHP_EOL;
    
    $response = $client->createTable(array(
        'TableName' => $tableName,
        'AttributeDefinitions' => array(
            array(
                'AttributeName' => 'MaSV',
                'AttributeType' => 'S' 
            ),
            array(
                'AttributeName' => 'MaLop',
                'AttributeType' => 'S' 
            ),
        ),
        'KeySchema' => array(
            array(
                'AttributeName' => 'MaSV',
                'KeyType' => 'HASH' 
            ),
            array(
                'AttributeName' => 'MaLop',
                'KeyType' => 'RANGE' 
            )
        ),
        'ProvisionedThroughput' => array(
             'ReadCapacityUnits'  => 6,
             'WriteCapacityUnits' => 5
        )
    ));
    $tableNames[] = $tableName;
    
    $tableName = 'lopchuyennganh';
    echo "Creating table $tableName. " . PHP_EOL;
    
    $response = $client->createTable(array(
        'TableName' => $tableName,
        'AttributeDefinitions' => array(
            array(
                'AttributeName' => 'MaLop',
                'AttributeType' => 'S' 
            )
        ),
        'KeySchema' => array(
            array(
                'AttributeName' => 'MaLop',
                'KeyType' => 'HASH'
            )
        ),
        'ProvisionedThroughput' => array(
            'ReadCapacityUnits'  => 6,
            'WriteCapacityUnits' => 5
        )
    ));
    $tableNames[] = $tableName;
    
        
    foreach($tableNames as $tableName) {
        echo "Creating $tableName. " . PHP_EOL;
        $client->waitUntil('TableExists', array('TableName' => $tableName));
        echo "$tableName created successfully. " . PHP_EOL;
    }
?>