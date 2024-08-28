// Quay lại với hai đội thể dục dụng cụ, Dolphins và Koalas! Có một môn thể dục dụng cụ mới,hoạt động khác biệt.
//Mỗi đội thi đấu 3 lần, sau đó tính trung bình của 3 điểm số (vì vậy mỗi đội có một điểm trung bình).
//Một đội chỉ thắng nếu điểm trung bình của họ ít nhất gấp đôi điểm trung bình của đội kia. Nếu không, không đội nào thắng!
// Nhiệm vụ của bạn:
// Tạo một hàm mũi tên 'calcAverage' để tính trung bình của 3 điểm số.
// Sử dụng hàm này để tính trung bình cho cả hai đội.
// Tạo một hàm 'checkWinner' nhận điểm trung bình của mỗi đội làm tham số ('avgDolphins' và 'avgKoalas'),
// sau đó ghi lại đội thắng vào console, cùng với điểm chiến thắng, theo quy tắc trên. Ví dụ: "Koalas thắng (30 vs. 13)".
// Sử dụng hàm 'checkWinner' để xác định đội thắng cho cả Dữ liệu 1 và Dữ liệu 2.
// Bỏ qua trường hợp hòa lần này.
// Dữ liệu kiểm tra:

// Dữ liệu 1: Dolphins ghi 44, 23 và 71. Koalas ghi 65, 54 và 49.
// Dữ liệu 2: Dolphins ghi 85, 54 và 41. Koalas ghi 23, 34 và 27.
// Gợi ý:

// Để tính trung bình của 3 giá trị, cộng tất cả lại với nhau và chia cho 3.
// Để kiểm tra nếu số A ít nhất gấp đôi số B, kiểm tra A >= 2 * B. Áp dụng điều này cho điểm trung bình của đội.

//1. Tạo hàm calcAverage
const calcAverage = (a, b, c) => (a + b + c) / 3;

//2. Tính trung bình cho cả hai đội
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

//3. Tạo hàm checkWinner
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}

//4. Kiểm tra đội thắng
checkWinner(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins2, avgKoalas2);