// Chúng ta đang xây dựng một ứng dụng cá cược bóng đá! Giả sử chúng ta nhận được dữ liệu từ một dịch vụ web 
//về một trận đấu cụ thể (biến 'game' ở trang tiếp theo). Trong thử thách này, chúng ta sẽ làm việc với dữ liệu đó.

// Nhiệm vụ của bạn:

// 1.Tạo một mảng cầu thủ cho mỗi đội (biến 'players1' và 'players2').
// 2.Cầu thủ đầu tiên trong bất kỳ mảng cầu thủ nào là thủ môn và những người khác là cầu thủ trên sân. 
// Đối với Bayern Munich (đội 1), tạo một biến ('gk') với tên của thủ môn và một mảng ('fieldPlayers') với tất cả 10 
// cầu thủ còn lại.
// 3.Tạo một mảng 'allPlayers' chứa tất cả các cầu thủ của cả hai đội (22 cầu thủ).
// 4.Trong trận đấu, Bayern Munich (đội 1) đã sử dụng 3 cầu thủ thay thế. Vì vậy, tạo một mảng mới ('players1Final') 
// chứa tất cả các cầu thủ ban đầu của đội 1 cộng với 'Thiago', 'Coutinho' và 'Perisic'.
// 5.Dựa trên đối tượng game.odds, tạo một biến cho mỗi tỷ lệ cược (gọi là 'team1', 'draw' và 'team2').
// 6.Viết một hàm ('printGoals') nhận một số lượng tùy ý tên cầu thủ (không phải mảng) và in từng tên ra console,
// cùng với số bàn thắng đã ghi tổng cộng (số lượng tên cầu thủ được truyền vào).
// Đội có tỷ lệ cược thấp hơn có khả năng thắng cao hơn. In ra console đội nào có khả năng thắng cao hơn,
// mà không sử dụng câu lệnh if/else hoặc toán tử ba ngôi.

// Dữ liệu cho trận đấu
const game = { 
    team1: 'Bayern Munich', 
    team2: 'Borrussia Dortmund', 
    players: [ 
      [ 
        'Neuer', 
        'Pavard', 
        'Martinez', 
        'Alaba', 
        'Davies', 
        'Kimmich', 
        'Goretzka', 
        'Coman', 
        'Muller', 
        'Gnarby', 
        'Lewandowski', 
      ], 
      [ 
        'Burki', 
        'Schulz', 
        'Hummels', 
        'Akanji', 
        'Hakimi', 
        'Weigl', 
        'Witsel', 
        'Hazard', 
        'Brandt', 
        'Sancho', 
        'Gotze', 
      ], 
    ], 
    score: '4:0', 
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',  
    'Hummels'], 
    date: 'Nov 9th, 2037', 
    odds: { 
      team1: 1.33, 
      x: 3.25, 
      team2: 6.5, 
    }, 
  }; 
// 1. Tạo mảng cầu thủ cho mỗi đội
const [players1, players2] = game.players;

// 2. Tạo biến 'gk' và mảng 'fieldPlayers' cho Bayern Munich
const [gk, ...fieldPlayers] = players1;

// 3. Tạo mảng 'allPlayers' chứa tất cả cầu thủ của cả hai đội
const allPlayers = [...players1, ...players2];

// 4. Tạo mảng 'players1Final' chứa tất cả cầu thủ ban đầu của Bayern Munich cộng với 'Thiago', 'Coutinho' và 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5. Tạo biến cho mỗi tỷ lệ cược
const {team1, x: draw, team2} = game.odds;

// 6. Viết hàm 'printGoals'
const printGoals = function (...players) {
    console.log(`${players.length} goals were scored`);
    for (const player of players) {
      console.log(player);
    }
};

// Dữ liệu kiểm tra 
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7. Đội có tỷ lệ cược thấp hơn có khả năng thắng cao hơn
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

// note:
// Tạo mảng cầu thủ cho mỗi đội: Sử dụng destructuring để lấy mảng cầu thủ từ game.players.
// Tạo biến 'gk' và mảng 'fieldPlayers': Sử dụng destructuring để tách thủ môn và các cầu thủ trên sân.
// Tạo mảng 'allPlayers': Sử dụng spread operator để kết hợp các cầu thủ của cả hai đội.
// Tạo mảng 'players1Final': Sử dụng spread operator để thêm các cầu thủ thay thế vào đội 1.
// Tạo biến cho mỗi tỷ lệ cược: Sử dụng destructuring để lấy các tỷ lệ cược từ game.odds.
// Viết hàm 'printGoals': Hàm nhận một số lượng tùy ý tên cầu thủ và in ra console.
// In ra đội nào có khả năng thắng cao hơn: Sử dụng toán tử logic để in ra đội có tỷ lệ cược thấp hơn.