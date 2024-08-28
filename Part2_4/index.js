// Hãy cải thiện máy tính tiền tip của Steven hơn nữa, lần này sử dụng vòng lặp!
// Nhiệm vụ của bạn:
// Tạo một mảng 'bills' chứa tất cả 10 giá trị hóa đơn kiểm tra.
// Tạo các mảng trống cho tiền tip và tổng giá trị ('tips' và 'totals').
// Sử dụng hàm 'calcTip' mà chúng ta đã viết trước đó (không cần viết lại) để tính tiền tip và 
// tổng giá trị (hóa đơn + tiền tip) cho mỗi giá trị hóa đơn trong mảng bills. Sử dụng vòng lặp 
// for để thực hiện 10 phép tính!
// Dữ liệu kiểm tra: 22, 295, 176, 440, 37, 105, 10, 1100, 86 và 52.

// Gợi ý: Gọi hàm 'calcTip' trong vòng lặp và sử dụng phương thức push để thêm giá trị vào
// các mảng tips và totals.

// Bonus: 4. Viết một hàm 'calcAverage' nhận một mảng gọi là 'arr' làm đối số. Hàm này tính 
// trung bình của tất cả các số trong mảng đã cho. Đây là một thử thách khó (chúng ta chưa làm
// điều này trước đây)! Dưới đây là cách giải quyết: 
// 4.1. Đầu tiên, bạn sẽ cần cộng tất cả các giá trị trong mảng. Để thực hiện phép cộng, bắt đầu
// bằng cách tạo một biến 'sum' bắt đầu từ 0. Sau đó, lặp qua mảng bằng cách sử dụng vòng lặp for.
// Trong mỗi lần lặp, thêm giá trị hiện tại vào biến 'sum'. Bằng cách này, vào cuối vòng lặp, 
// bạn đã cộng tất cả các giá trị lại với nhau. 
// 4.2. Để tính trung bình, chia tổng bạn đã tính trước đó cho độ dài của mảng (vì đó là số phần tử).
// 4.3. Gọi hàm với mảng 'totals'.

// Hàm calcTip
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// 1. Tạo mảng bills chứa tất cả 10 giá trị hóa đơn kiểm tra.
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2. Tạo các mảng trống cho tiền tip và tổng giá trị ('tips' và 'totals').
const tips = [];
const totals = [];

// 3. Sử dụng hàm calcTip để tính tiền tip và tổng giá trị cho mỗi giá trị hóa đơn trong mảng bills.
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

// In ra kết quả
console.log('Bills: ', bills);
console.log('Tips: ', tips);
console.log('Totals: ', totals);

// 4. Viết hàm calcAverage
const calcAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// Gọi hàm calcAverage với mảng totals
console.log('Average Total: ', calcAverage(totals));