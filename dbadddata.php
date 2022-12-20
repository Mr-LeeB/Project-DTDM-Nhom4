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
                            'MaSV'       => array('S' =>'1101865'),
                            'MaLop'     => array('S' => 'KH10Y1A1'),
                            'HoLot' => array('S' => 'Đỗ Duy'),
                            'Ten' => array('S' => 'An'),
                            'NgaySinh' => array('S' => '1992-02-15'),
                            'GioiTinh' => array('N' => '1'),
                            'QueQuan' => array('S' => 'HCM'),
                            'MatKhau' => array('S' => '1101865'),
                            'Email' => array('S' => 'an1101865@student.hcmute.edu.vn'),
                        )
                    ),
                ),
                array(
                    'PutRequest' => array(
                        'Item' => array(
                            'MaSV'       => array('S' =>'1101866'),
                            'MaLop'     => array('S' => 'KH10Y1A1'),
                            'HoLot' => array('S' => 'Trần Tấn'),
                            'Ten' => array('S' => 'An'),
                            'NgaySinh' => array('S' => '1991-01-01'),
                            'GioiTinh' => array('N' => '1'),
                            'QueQuan' => array('S' => 'HCM'),
                            'MatKhau' => array('S' => '1101865'),
                            'Email' => array('S' => 'an1101866@student.hcmute.edu.vn'),
                        )
                    ),
                ),
                array(
                    'PutRequest' => array(
                        'Item' => array(
                            'MaSV'       => array('S' =>'1101867'),
                            'MaLop'     => array('S' => 'KH10Y1A1'),
                            'HoLot' => array('S' => 'Nguyễn Quốc'),
                            'Ten' => array('S' => 'Bảo'),
                            'NgaySinh' => array('S' => '1992-05-27'),
                            'GioiTinh' => array('N' => '1'),
                            'QueQuan' => array('S' => 'HCM'),
                            'MatKhau' => array('S' => '1101865'),
                            'Email' => array('S' => 'bao1101867@student.hcmute.edu.vn'),
                        )
                    ),
                ),
                array(
                    'PutRequest' => array(
                        'Item' => array(
                            'MaSV'       => array('S' =>'1101868'),
                            'MaLop'     => array('S' => 'KH10Y1A1'),
                            'HoLot' => array('S' => 'Tạ Tấn'),
                            'Ten' => array('S' => 'Bửu'),
                            'NgaySinh' => array('S' => '1992-01-19'),
                            'GioiTinh' => array('N' => '1'),
                            'QueQuan' => array('S' => 'HCM'),
                            'MatKhau' => array('S' => '1101868'),
                            'Email' => array('S' => 'buu1101868@student.hcmute.edu.vn'),
                        )
                    ),
                ),
                array(
                    'PutRequest' => array(
                        'Item' => array(
                            'MaSV'       => array('S' =>'1101869'),
                            'MaLop'     => array('S' => 'KH10Y1A1'),
                            'HoLot' => array('S' => 'Mai Hữu'),
                            'Ten' => array('S' => 'Danh'),
                            'NgaySinh' => array('S' => '1992-08-18'),
                            'GioiTinh' => array('N' => '1'),
                            'QueQuan' => array('S' => 'HCM'),
                            'MatKhau' => array('S' => '1101869'),
                            'Email' => array('S' => 'danh1101869@student.hcmute.edu.vn'),
                        )
                    ),
                ),
                array(
                    'PutRequest' => array(
                        'Item' => array(
                            'MaSV'       => array('S' =>'1101870'),
                            'MaLop'     => array('S' => 'KH10Y1A1'),
                            'HoLot' => array('S' => 'Nguyễn Thị'),
                            'Ten' => array('S' => 'Diệu'),
                            'NgaySinh' => array('S' => '1992-02-15'),
                            'GioiTinh' => array('N' => '0'),
                            'QueQuan' => array('S' => 'HCM'),
                            'MatKhau' => array('S' => '1101870'),
                            'Email' => array('S' => 'dieu1101870@student.hcmute.edu.vn'),
                        )
                    ),
                ),
                array(
                    'PutRequest' => array(
                        'Item' => array(
                            'MaSV'       => array('S' =>'1101871'),
                            'MaLop'     => array('S' => 'KH10Y1A1'),
                            'HoLot' => array('S' => 'Nguyễn Thị Lan'),
                            'Ten' => array('S' => 'Diệu'),
                            'NgaySinh' => array('S' => '1992-02-15'),
                            'GioiTinh' => array('N' => '0'),
                            'QueQuan' => array('S' => 'HCM'),
                            'MatKhau' => array('S' => '1101871'),
                            'Email' => array('S' => 'dieu1101871@student.hcmute.edu.vn'),
                        )
                    ),
                ),
                array(
                    'PutRequest' => array(
                        'Item' => array(
                            'MaSV'       => array('S' =>'1101872'),
                            'MaLop'     => array('S' => 'KH10Y1A1'),
                            'HoLot' => array('S' => 'Lê Tấn'),
                            'Ten' => array('S' => 'Đạt'),
                            'NgaySinh' => array('S' => '1992-02-15'),
                            'GioiTinh' => array('N' => '1'),
                            'QueQuan' => array('S' => 'HCM'),
                            'MatKhau' => array('S' => '1101872'),
                            'Email' => array('S' => 'dat1101872@student.hcmute.edu.vn'),
                        )
                    ),
                ),
                array(
                    'PutRequest' => array(
                        'Item' => array(
                            'MaSV'       => array('S' =>'1101873'),
                            'MaLop'     => array('S' => 'KH10Y1A1'),
                            'HoLot' => array('S' => 'Trần Tấn'),
                            'Ten' => array('S' => 'Đạt'),
                            'NgaySinh' => array('S' => '1992-02-15'),
                            'GioiTinh' => array('N' => '1'),
                            'QueQuan' => array('S' => 'HCM'),
                            'MatKhau' => array('S' => '1101873'),
                            'Email' => array('S' => 'dat1101873@student.hcmute.edu.vn'),
                        )
                    ),
                )
            ),
        ),
    ));
    echo "Data added. " . PHP_EOL;
