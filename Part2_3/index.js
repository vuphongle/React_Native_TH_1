// Quay lại với việc so sánh chỉ số BMI của Mark và John! Lần này, hãy sử dụng các đối tượng để thực
// hiện các phép tính! Nhớ rằng: BMI = khối lượng / chiều cao ** 2 = khối lượng / (chiều cao * chiều cao)
// (khối lượng tính bằng kg và chiều cao tính bằng mét).
// Nhiệm vụ của bạn:
// Đối với mỗi người, tạo một đối tượng với các thuộc tính cho tên đầy đủ, khối lượng và chiều cao
// (Mark Miller và John Smith).
// Tạo một phương thức 'calcBMI' trên mỗi đối tượng để tính chỉ số BMI (cùng một phương thức trên
// cả hai đối tượng). Lưu giá trị BMI vào một thuộc tính, và cũng trả về nó từ phương thức.
// Ghi vào console ai có chỉ số BMI cao hơn, cùng với tên đầy đủ và chỉ số BMI tương ứng.
// Ví dụ: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Dữ liệu kiểm tra: Mark nặng 78 kg và cao 1.69 m. John nặng 92 kg và cao 1.95 m.

// 1. Tạo đối tượng cho Mark và John
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    // 2. Tạo phương thức calcBMI
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    // 2. Tạo phương thức calcBMI
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

// Tính BMI cho Mark và John
mark.calcBMI();
john.calcBMI();

// 3. Ghi vào console ai có chỉ số BMI cao hơn
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
} else {
    console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi})!`);
}