// Steven vẫn đang xây dựng máy tính tiền tip của mình, sử dụng các quy tắc như trước: Tip 15% của 
// hóa đơn nếu giá trị hóa đơn nằm trong khoảng từ 50 đến 300, và nếu giá trị khác, tiền tip là 20%.
// Nhiệm vụ của bạn:
// Viết một hàm 'calcTip' nhận bất kỳ giá trị hóa đơn nào làm đầu vào và trả về tiền tip tương ứng, 
// được tính dựa trên các quy tắc trên (bạn có thể xem lại mã từ thử thách máy tính tiền tip đầu tiên nếu cần).
// Sử dụng loại hàm mà bạn thích nhất. Kiểm tra hàm với giá trị hóa đơn là 100.
// Và bây giờ hãy sử dụng mảng! Tạo một mảng 'bills' chứa dữ liệu kiểm tra dưới đây.
// Tạo một mảng 'tips' chứa giá trị tiền tip cho mỗi hóa đơn, được tính từ hàm bạn đã tạo trước đó.
// Bonus: Tạo một mảng 'total' chứa tổng giá trị, tức là hóa đơn + tiền tip.
// Dữ liệu kiểm tra: 125, 555 và 44.

// 1. Viết hàm calcTip
const calcTip = (bill) => {
    return bill >=50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Kiểm tra hàm với giá trị hóa đơn là 100
console.log(calcTip(100));

// 2. Tạo mảng bills chứa dữ liệu kiểm tra
const bills = [125, 555, 44];

// 3. Tạo mảng tips chứa giá trị tiền tip cho mỗi hóa đơn
const tips = bills.map(bill => calcTip(bill));

// 4. Tạo mảng total chứa tổng giá trị, tức là hóa đơn + tiền tip
const total = bills.map((bill, index) => bill + tips[index]);

// In kết quả
console.log('Bills: ', bills);
console.log('Tips: ', tips);
console.log('Total: ', total);