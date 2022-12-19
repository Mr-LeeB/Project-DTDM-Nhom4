<?php
require_once("config.php");

// kiểm tra trường hợp lấy thông tin SV

if (isset($_REQUEST["Type"])) {
	if ($_REQUEST["Type"] == "getInfo") {
		$masv = $_REQUEST["MaSV"];
		$result = $db->getItem(array(
			'ConsistentRead' => true,
			'TableName' => 'sinhvien',
			'Key'       => array(
				'MaSV'   => array('S' => $masv)
			)
		));
		$row = array(
			'MaSV'=>$result['Item']['MaSV']['S'],
			'MaLop'=>$result['Item']['MaLop']['S'],
			'Holot'=>$result['Item']['HoLot']['S'],
			'Ten'=>$result['Item']['Ten']['S'],
			'NgaySinh'=>$result['Item']['NgaySinh']['S'],
			'GioiTinh'=>$result['Item']['GioiTinh']['N'],
			'QueQuan'=>$result['Item']['QueQuan']['S'],
			'MatKhau'=>$result['Item']['MatKhau']['S'],
			'Email'=>$result['Item']['Email']['S']
		);
		if (1) {
			echo  json_encode($row);
		} else {
			echo  json_encode(null);
		}
		exit();
	}

	if ($_REQUEST["Type"] == "Update") {
		$masv = $_REQUEST["MaSV"];
		$holot = $_REQUEST["HoLot"];
		$ten = $_REQUEST["Ten"];
		$ngaysinh = $_REQUEST["NgaySinh"];
		$gioitinh = $_REQUEST["GioiTinh"];
		$quequan = $_REQUEST["QueQuan"];
		$matkhau = $_REQUEST["MatKhau"];
		$email = $_REQUEST["Email"];
		$result = $db->updateItem(array(
			'TableName' => 'sinhvien',
			'Key'       => array(
				'MaSV'   => array('S' => $masv)
			),
			'AttributeUpdates' => array(
				'HoLot' => array(
					'Value' => array('S' => $holot),
					'Action' => 'PUT'
				),
				'Ten' => array(
					'Value' => array('S' => $ten),
					'Action' => 'PUT'
				),
				'NgaySinh' => array(
					'Value' => array('S' => $ngaysinh),
					'Action' => 'PUT'
				),
				'GioiTinh' => array(
					'Value' => array('N' => $gioitinh),
					'Action' => 'PUT'
				),
				'QueQuan' => array(
					'Value' => array('S' => $quequan),
					'Action' => 'PUT'
				),
				'MatKhau' => array(
					'Value' => array('S' => $matkhau),
					'Action' => 'PUT'
				),
				'Email' => array(
					'Value' => array('S' => $email),
					'Action' => 'PUT'
				)
			)
		));
		if (1) {
			echo "OK";
		} else {
			echo "ERROR";
		}
		exit();
	}
}

//kiểm tra trường hợp xóa 1 dòng
if (isset($_REQUEST["MaSV"])) {
	$masv = $_REQUEST["MaSV"];
	$result = $db->deleteItem(array(
		'TableName' => 'sinhvien',
		'Key'       => array(
			'MaSV'   => array('S' => $masv)
		)
	));

	if (1) {
		echo "OK";
	} else {
		echo "ERROR";
	}

	exit();
}

$maLop = "";
// lấy mã lớp chọn từ DropDownList
if (isset($_REQUEST["MaLop"])) {
	$maLop = $_REQUEST["MaLop"];
}

$limit = 10;
$last = $limit;
if (isset($_POST["Last"])){
	$last= $_POST["Last"]+$limit;
}
$total_row = 0;

// lấy danh sách sinh viên
$marsharler = new Aws\DynamoDb\Marshaler();
$params = [
	'TableName' => 'sinhvien',
	'ProjectionExpression' => 'MaSV, MaLop, HoLot, Ten, NgaySinh, GioiTinh, QueQuan, Email',
];
$result = $db->scan($params);
// nếu có dữ liệu thì hiển thị danh sách
$count = 0;
foreach( $result['Items'] as $i ) {
	$item = $marsharler->unmarshalItem($i);
	if ($item['MaLop'] == $maLop)
		$count++;
}
$total_row = $count;
if ( $count > 0) {
?>

	<table class="ds">
		<!-- in tiêu đề danh sách -->
		<thead>
			<tr class="ui-widget-header">
				<th><input type="checkbox" id="checkAll" /></th>
				<th>STT</th>
				<th>MSSV</th>
				<th>Họ tên</th>
				<th>Ngày Sinh</th>
				<th>Quê quán</th>
				<th>Email</th>
				<th></th>
			</tr>
		</thead>
		<!-- end in tiêu đề-->
		<!-- inh danh dánh -->
		<tbody>
			<?php
			$a = 0;
				foreach( $result['Items'] as $i ) {
					$item = $marsharler->unmarshalItem($i);
					if ($item['MaLop'] == $maLop) {
						echo "<tr class='trsv' >";
						echo "<td><input name='chkmasv[]'  value='" . $item["MaSV"] . "' class='chkmasv' type='checkbox'/> </td>";
						echo "<td class='stt'>" . ++$a . "</td>";
						echo "<td>" . $item["MaSV"] . "</td>";
						echo "<td>" . $item["HoLot"] . " " . $item["Ten"] . "</td>";
						echo "<td>";
						$d = strtotime($item["NgaySinh"]);
						echo date("d-m-Y", $d);
						echo "</td>";
						echo "<td>" . $item["QueQuan"] . "</td>";
						echo "<td>" . $item["Email"] . "</td>";
						echo "<td>";
							echo "<button class='btnSua' name='MaSV' value='" . $item ["MaSV"] . "'><span class='ui-icon ui-icon-pencil'></span></button>";
							echo "<button name='btnXoa' class='btnXoa' value='" . $item ["MaSV"] . "' ><span class='ui-icon ui-icon-trash'></span> </button>";
						echo "</td>";
						echo "</tr>";
					}
				}
			?>
		</tbody>
		<!--  end in danh sách-->

		<!-- in footer của danh sách -->
		<tfoot>
			<tr>
				<td colspan="8">
					<div id="divThemImg" align="center">
						<button id="btnLast" style="display: none;" data-finish="
										<?php
										if ($last >= $total_row) {
											echo 1;
										} else {
											echo 0;
										}
										?>
										" value="<?php echo $last; ?>">
						</button>
					</div>
				</td>
			</tr>
		</tfoot>
		<!--  end in footer của danh sách -->
	</table>

<?php
} else {
	echo "<div class='success'> Không có sv nào. </div>";
}
?>