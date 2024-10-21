function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Kiểm tra nếu người dùng đã nhập đủ thông tin
    if (username && password) {
        // Chuyển hướng đến URL yêu cầu
        window.location.href = "https://youtooz.com/products/troll-face";
        return false; // Ngăn không cho form gửi dữ liệu đi
    }

    alert("Hãy nhập đầy đủ email và mật khẩu!");
    return false;
}
