// Triển khai chức năng khởi động lại trò chơi, để người chơi có thể đoán lại!

// Nhiệm vụ của bạn:

// Chọn phần tử có lớp 'again' và gắn một trình xử lý sự kiện click.
// Trong hàm xử lý, khôi phục các giá trị ban đầu của các biến 'score' và 'secretNumber'.
// Khôi phục các điều kiện ban đầu của các trường message, number, score và guess input.
// Cũng khôi phục màu nền ban đầu (#222) và chiều rộng của số (15rem).

// Giả sử các biến và phần tử DOM đã được khai báo trước đó.
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// 1. Chọn phần tử có lớp 'again' và gắn một trình xử lý sự kiện click.
document.querySelector('.again').addEventListener('click', function () {
    // 2. Khôi phục các giá trị ban đầu của các biến 'score' và 'secretNumber'.
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // 3. Khôi phục các điều kiện ban đầu của các trường message, number, score và guess input.
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

    // 4. Khôi phục màu nền ban đầu (#222) và chiều rộng của số (15rem).
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});