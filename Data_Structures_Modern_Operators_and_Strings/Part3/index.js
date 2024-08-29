// Tiếp tục với ứng dụng cá cược bóng đá của chúng ta! Lần này, chúng ta có một bản đồ gọi
// là 'gameEvents' với nhật ký các sự kiện đã xảy ra trong trận đấu. Các giá trị là các sự
// kiện và các khóa là các phút mà mỗi sự kiện xảy ra (một trận bóng đá có 90 phút cộng
// thêm một số thời gian bù giờ).

// Nhiệm vụ của bạn:

// 1. Tạo một mảng 'events' chứa các sự kiện khác nhau đã xảy ra trong trận đấu
// (không trùng lặp).
// 2. Sau khi trận đấu kết thúc, phát hiện rằng thẻ vàng ở phút 64 là không công bằng.
// Vì vậy, hãy xóa sự kiện này khỏi nhật ký sự kiện trận đấu.
// 3. Tính toán và ghi chuỗi sau vào console: "An event happened, on average, every 9
// minutes" (lưu ý rằng một trận đấu có 90 phút).
// 4. Lặp qua 'gameEvents' và ghi từng phần tử vào console, đánh dấu xem nó ở hiệp một
// hay hiệp hai (sau 45 phút) của trận đấu, như sau:
// [FIRST HALF] 17: ⚽ GOAL
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1. Tạo mảng 'events' chứa các sự kiện khác nhau đã xảy ra trong trận đấu (không trùng lặp)
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. Xóa sự kiện thẻ vàng ở phút 64
gameEvents.delete(64);
console.log(gameEvents);

// 3. Tính toán và ghi chuỗi sau vào console: "An event happened, on average, every 9 minutes"
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4. Lặp qua 'gameEvents' và ghi từng phần tử vào console, đánh dấu xem nó ở hiệp một hay hiệp hai
for (const [minute, event] of gameEvents) {
  const half = minute <= 45 ? "FIRST HALF" : "SECOND HALF";
  console.log(`[${half}] ${minute}: ${event}`);
}
