// Cho một mảng các nhiệt độ tối đa dự báo, nhiệt kế hiển thị một chuỗi với các nhiệt độ
// đã cho. Ví dụ: [17, 21, 23] sẽ in "... 17ºC trong 1 ngày ... 21ºC trong 2 ngày ... 23ºC 
// trong 3 ngày ..."

// Nhiệm vụ của bạn:

// Tạo một hàm 'printForecast' nhận vào một mảng 'arr' và ghi một chuỗi như trên vào
// console. Thử với cả hai bộ dữ liệu kiểm tra.
// Sử dụng khung giải quyết vấn đề: Hiểu vấn đề và chia nhỏ nó thành các vấn đề con!
// Dữ liệu kiểm tra:

// Dữ liệu 1: [17, 21, 23]
// Dữ liệu 2: [12, 5, -5, 0, 4]

//1. Tạo hàm printForecast
const printForecast = (arr) => {
    let forecastStr = '...';
    for (let i = 0; i < arr.length; i++) {
        forecastStr += `${arr[i]}ºC trong ${i + 1} ngày ...`;
    }
    console.log(forecastStr);
}

//2. Thử với cả hai bộ dữ liệu kiểm tra
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForecast(data1);
printForecast(data2);