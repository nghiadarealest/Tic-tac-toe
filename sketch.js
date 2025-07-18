// TẠO BẢNG
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  let w; // = rộng / 3;
  let h; // = cao / 3;
  
  let ai = 'X';
  let human = 'O';
  let currentPlayer = human;
  
  function setup() {
    createCanvas(400, 400);
    w = width / 3;
    h = height / 3;
    // bestMove(); //Nếu thêm câu lệnh này, AI sẽ chọn nước đi tốt nhất, 
    //Vì AI được đi đầu tiên => Tất cả nước đi đều sẽ là tốt nhất => Chọn được cột 1 hàng 1
  }
  
  function equals3(a, b, c) {
    return a == b && b == c && a != '';
  }
  
  // Điều kiện để chiến thắng
  function checkWinner() {
    let winner = null;
  
    // Thắng Ngang
    for (let i = 0; i < 3; i++) {
      if (equals3(board[i][0], board[i][1], board[i][2])) {
        winner = board[i][0];
      }
    }
  
    // Thắng Dọc
    for (let i = 0; i < 3; i++) {
      if (equals3(board[0][i], board[1][i], board[2][i])) {
        winner = board[0][i];
      }
    }
  
    // Thắng Chéo
    if (equals3(board[0][0], board[1][1], board[2][2])) {
      winner = board[0][0];
    }
    if (equals3(board[2][0], board[1][1], board[0][2])) {
      winner = board[2][0];
    }
  
    let openSpots = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == '') {
          openSpots++;
        }
      }
    }
  
    if (winner == null && openSpots == 0) {
      return 'hoa';
    } else {
      return winner;
    }
  }
  
  // Click chuột để chọn ô
  function mousePressed() {
    if (currentPlayer == human) {
      let i = floor(mouseX / w);
      let j = floor(mouseY / h);
      if (board[i][j] == '') {
        board[i][j] = human;
        currentPlayer = ai;
        bestMove();
      }
    }
  }
  // Tạo cột, dòng
  function draw() {
    background(255);
    strokeWeight(4);
  
    line(w, 0, w, height);
    line(w * 2, 0, w * 2, height);
    line(0, h, width, h);
    line(0, h * 2, width, h * 2);

  // Tạo kí hiệu X, O
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 3; i++) {
        let x = w * i + w / 2;
        let y = h * j + h / 2;
        let spot = board[i][j];
        textSize(32);
        let r = w / 4;
        if (spot == human) {
          noFill();
          ellipse(x, y, r * 2);
        } else if (spot == ai) {
          line(x - r, y - r, x + r, y + r);
          line(x + r, y - r, x - r, y + r);
        }
      }
    }
  
    //Thông báo kết quả
    let result = checkWinner();
    if (result != null) {
      noLoop();
      let resultP = createP('');
      resultP.style('font-size', '32pt');
      if (result == 'hoa') {
        resultP.html('Hòa');
      } else {
        resultP.html(`${result} wins!`);
      }
    }
  }
  