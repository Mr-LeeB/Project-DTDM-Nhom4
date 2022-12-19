<?php

function auto_login(){
		$db = $GLOBALS["db"];
	if (isset($_COOKIE["User"]) && isset($_COOKIE["Password"]) && isset($_COOKIE["Type"])){
		$user = $_COOKIE["User"];
		$pass = $_COOKIE["Password"];
		$type = $_COOKIE["Type"];
			
		if ($type == "sv"){
			// $sql = "SELECT MaSV as User, concat(Holot,' ', Ten) as HoTen, MatKhau ".
			// 		" FROM dbo_sinhvien WHERE MaSV='".$user."' ".
			// 		" AND MatKhau ='".$pass."'";
			$result = $db->getItem(array(
				'ConsistentRead' => true,
				'TableName' => 'sinhvien',
				'Key'       => array(
					'MaSV'   => array('S' => $user)
				)
			));
		}else{
			// $sql = "SELECT MaGV as User, concat(Holot,' ', Ten) as HoTen, MatKhau  ".
			// 		" FROM dbo_giangvien WHERE MaGV='".$user."' ".
			// 		" AND MatKhau ='". $pass ."'";
			$result = $db->getItem(array(
				'ConsistentRead' => true,
				'TableName' => 'giangvien',
				'Key'       => array(
					'MaGV'   => array('S' => $user)
				)
			));
		}
		// nếu xác thực thành công
		if($row = $result->fetch_array()){
	
			// tạo lại session
			$_SESSION["loggedin"]= true;
			$_SESSION["User"] =  $result['Item']['MaSV']['S'];
			$_SESSION["HoTen"] = $result['Item']['HoLot']['S'] . " " . $result['Item']['Ten']['S'];
			$_SESSION["Type"] = $type;
				
			// đặt lại cookie với thời gian mới
			setcookie("User",$result['Item']['MaSV']['S'],time()+3600*24 );
			setcookie("Password",$result['Item']['HoLot']['S'] . " " . $result['Item']['Ten']['S'],time()+3600*24);
			setcookie("Type",$type,time()+3600*24);
				
			header("location: index.php");
				
		}else{
			// xác thực không thành công, xóa cookie đã lưu
			setcookie("User","",time()-3600);
			setcookie("Password","",time()-3600);
			setcookie("Type","",time()-3600);
			header("location: ". $_SERVER["PHP_SELF"]);
		}
	}
}
?>