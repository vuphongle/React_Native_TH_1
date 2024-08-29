// Tiếp tục với ứng dụng cá cược bóng đá của chúng ta! Tiếp tục sử dụng biến 'game' từ trước.

// Nhiệm vụ của bạn:

// 1.Lặp qua mảng game.scored và in tên mỗi cầu thủ ra console, cùng với số bàn thắng
// (Ví dụ: "Goal 1: Lewandowski").
// 2.Sử dụng vòng lặp để tính trung bình tỷ lệ cược và ghi nó ra console
// (Chúng ta đã học cách tính trung bình, bạn có thể kiểm tra lại nếu không nhớ).
// 3.In 3 tỷ lệ cược ra console, nhưng theo cách định dạng đẹp, chính xác như sau:
//      Odd of victory Bayern Munich: 1.33
//      Odd of draw: 3.25
//      Odd of victory Borrussia Dortmund: 6.5 Lấy tên đội trực tiếp từ đối tượng game,
//  không hardcode chúng (ngoại trừ "draw"). Gợi ý: Lưu ý cách các tỷ lệ cược và đối
//  tượng game có cùng tên thuộc tính.
// 4.Bonus: Tạo một đối tượng gọi là 'scorers' chứa tên của các cầu thủ đã ghi bàn làm 
// thuộc tính và số bàn thắng làm giá trị. Trong trò chơi này, nó sẽ trông như thế này:

// Dữ liệu trận đấu
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnabry",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnabry", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5,
  },
};

// 1. Lặp qua mảng game.scored và in tên mỗi cầu thủ ra console, cùng với số bàn thắng
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2. Sử dụng vòng lặp để tính trung bình tỷ lệ cược và ghi nó ra console
const odds = Object.values(game.odds);
let averageOdd = 0;
for (const odd of odds) {
  averageOdd += odd;
}
averageOdd /= odds.length;
console.log(`Average odd: ${averageOdd}`);

// 3. In 3 tỷ lệ cược ra console, nhưng theo cách định dạng đẹp
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "draw" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// 4. Bonus: Tạo đối tượng 'scorers'
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

// Note:
// Lặp qua mảng game.scored: Sử dụng for...of và entries() để lấy cả chỉ số và tên cầu thủ, sau đó in ra console.
// Tính trung bình tỷ lệ cược: Sử dụng Object.values() để lấy các giá trị tỷ lệ cược, sau đó tính trung bình và in ra console.
// In tỷ lệ cược theo định dạng đẹp: Sử dụng Object.entries() để lặp qua các tỷ lệ cược và in ra theo định dạng yêu cầu.
// Tạo đối tượng scorers: Sử dụng vòng lặp để đếm số lần mỗi cầu thủ ghi bàn và lưu vào đối tượng scorers.