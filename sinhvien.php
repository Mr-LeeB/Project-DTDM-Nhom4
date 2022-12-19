<?php require "header.php"; ?>
<?php
$marsharler = new Aws\DynamoDb\Marshaler();
$params = [
	'TableName' => 'lopchuyennganh',
	'ProjectionExpression' => 'MaLop, Khoa, MaCN, TenLop'
];
$result = $db->scan($params);
?>

<div class="group-box">
	<div align="center">
		<div class="title">SINH VIÊN</div>
		<div class="group-box-content">
			<form method="post" name="frmSV" action="<?php echo $_SERVER["PHP_SELF"]; ?>">
				<label>Chọn lớp:</label>
				<select name="MaLop" id="svDSLop">
					<option value="">--chọn--</option>
					<?php
					if ($result) {
						foreach ($result['Items'] as $i) {
							$item = $marsharler->unmarshalItem($i);
							echo "<option value='" . $item["MaLop"] . "' >" . $item["TenLop"] . "</option>";
						}
					}
					?>
				</select> &nbsp;&nbsp;
				<span id="divImg"></span>
				<br />
				<hr>

				<div id="divDSSV"></div>

				<div id="delDialog">
					<p> </p>
				</div>

				<div id="errDialog">
					<p> </p>
				</div>


				<!--  form này không có tác dụng gì, chỉ dùng để chỉ ra nút Sửa ở cột bên phải bảng
		thuộc về form này, mục đích là không cho post dữ liệu dư thừa khi nhấn nút Sửa, vì chỉ cần giá trị
		trong thuộc tính value của nút Sửa sử dụng tag <button>  -->
			</form>
			<form id="frmNoAction">
			</form>


			<div id="dialogUpdateSV">
				<p id="info"></p>

				<label for="txtMaLop">Mã Lớp:</label>
				<input type="text" id="txtMaLop" name="txtMaLop" disabled /> <br />

				<label for="txtMaSV">Mã SV:</label>
				<input type="text" id="txtMaSV" name="txtMaSV" disabled /> <br />

				<label for="txtHoLot">Họ Lót:</label>
				<input type="text" id="txtHoLot" name="txtHoLot" /> <br />

				<label for="txtTen">Tên:</label>
				<input type="text" id="txtTen" name="txtTen" /> <br />

				<label for="txtNgaySinh">Ngày Sinh:</label>
				<input type="text" id="txtNgaySinh" name="txtNgaySinh" /> <br />

				<label for="rdoGioiTinh">Giới tính:</label>

				<input type="radio" id="rdoNam" name="rdoGioiTinh[]" value="1" checked />
				<span>Nam</span>
				<input type="radio" id="rdoNu" name="rdoGioiTinh[]" value="0" />
				<span>Nữ</span>
				<p></p>

				Quê Quán:
				<textarea id="txtQueQuan" name="txtQueQuan" cols="40" rows="4"></textarea> <br />

				<label for="txtMatKhau">Mật khẩu:</label>
				<input type="password" id="txtMatKhau" name="txtMatKhau" /> <br />

				<label for="txtEmail">Email:</label>
				<input type="text" id="txtEmail" name="txtEmail" /> <br />

			</div>
			<p> </p>
		</div>
	</div>
</div>
<?php require "footer.php"; ?>