# *Đề tài:* Xây dựng VPC và chạy Webserver trên AWS

## Yêu cầu:
- Xây dựng VPC: 1 public subnet + 1 private subnet
- Khởi tạo 1 EC2 (cài đặt web server) + 1  DynamoDB
- Website quản lý thông tin sinh viên (Giao diện + Xử lý + Database đơn giản)"


### Thông tin thành viên:

|*Họ và tên*            |*MSSV*     |
|-----------------------|-----------|
|Lê Quang Bảo           | 20110439  |
|Trần Chí Kiên          | 20110507  |
|Nguyễn Ngọc Cẩm Hạnh   | 20110469  |

### Các bước thực hiện:
#### 1. Tạo VPC
- Tạo VPC với 1 public subnet và 1 private subnet
- Tạo 1 security group cho public subnet và 1 security group cho private subnet
#### 2. Tạo EC2
- Tạo 1 máy ảo EC2 Ubuntu trong public subnet: Ubuntu 18.04 LTS (HVM), SSD Volume Type
#### 3. Cấu hình EC2
- Cài đặt Apache2, PHP
'
sudo apt update
sudo apt install apache2
sudo apt install php libapache2-mod-php
sudo nano /etc/apache2/mods-enabled/dir.conf (đưa index.php lên trước index.html)
sudo systemctl restart apache2
'
- Tải source code từ github về và cài đặt
'
cd /var/www/html
wget https://github.com/Mr-LeeB/Project-DTDM-Nhom4/archive/refs/heads/master.zip
unzip master.zip
cp -r Project-DTDM-Nhom4-master/* /var/www/html/
rm -rf Project-DTDM-Nhom4-master master.zip
'
- Composer, AWS SDK for PHP
'
sudo su
curl -s http://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/
php -d memory_limit=-1 /usr/local/bin/composer.phar require aws/aws-sdk-php
'
#### 4. Công nghệ sử dụng
- AWS SDK for PHP
- DynamoDB
- Apache2
- PHP
- Composer
- Ubuntu 18.04 LTS (HVM), SSD Volume Type
#### 6. Tài liệu tham khảo
- https://docs.aws.amazon.com/sdk-for-php/v3/developer-guide/getting-started_installation.html
