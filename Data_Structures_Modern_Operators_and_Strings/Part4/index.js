// Viết một chương trình nhận danh sách các tên biến được viết theo kiểu underscore_case 
// và chuyển đổi chúng thành camelCase. Đầu vào sẽ đến từ một textarea được chèn vào DOM 
// (xem mã dưới đây để chèn các phần tử), và việc chuyển đổi sẽ xảy ra khi nút được nhấn.

// Dữ liệu kiểm tra (dán vào textarea, bao gồm cả khoảng trắng):
// underscore_case 
// first_name 
// Some_Variable  
// calculate_AGE 
// delayed_departure 

// underscoreCase ✅ 
// firstName ✅✅ 
// someVariable ✅✅✅ 
// calculateAge   ✅✅✅✅ 
// delayedDeparture  ✅✅✅✅✅ 
// Chèn textarea và button vào DOM

// Gợi ý:

// Nhớ ký tự nào xác định một dòng mới trong textarea.
// Giải pháp chỉ cần hoạt động cho biến gồm 2 từ, như a_b.
// Bắt đầu mà không cần lo lắng về việc chuyển đổi tên hoạt động. Giải quyết điều đó 
// chỉ sau khi bạn có biến.
// Thử thách này khó có chủ đích, vì vậy hãy bắt đầu xem giải pháp nếu bạn bị mắc kẹt. 
// Sau đó tạm dừng và tiếp tục!

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

