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

    $tableName = 'sinhvien';
    echo "Adding data to $tableName table. " . PHP_EOL;

    $response = $client->batchWriteItem(array(
        'RequestItems' => array(
            $tableName => array(
                array(
                    'PutRequest' => array(
                        'Item' => array(
                            'MaSV'       => array('S' =>'1101100'),
                            'MaLop'     => array('S' => 'KH10Y1A1'),
                            'HoLot' => array('S' => 'Đỗ Duy'),
                            'Ten' => array('S' => 'An'),
                            'NgaySinh' => array('S' => '1992-02-15'),
                            'GioiTinh' => array('N' => '1'),
                            'QueQuan' => array('S' => 'HCM'),
                            'MatKhau' => array('S' => '592d76e265d1a8bf1093479259bcd39e'),
                            'Email' => array('S' => 'an1101865@student.ctu.edu.vn'),
                        )
                    ),
                )
            ),
        ),
    ));
    

    echo "Data added. " . PHP_EOL;
