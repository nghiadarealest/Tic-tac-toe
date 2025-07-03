function bestMove() {
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == '') { // Kiểm tra chỗ trống
          board[i][j] = ai; // Câu lệnh để AI thực hiện
          let score = minimax(board, 0, false); // Sau khi AI thực hiện, Minimax sẽ trả lại điểm cho nước đi này
          board[i][j] = ''; // Câu lệnh cho lượt tiếp theo (AI sẽ ko được thực hiện nữa)
          if (score > bestScore) { // Câu lệnh tìm ra hướng đi tốt nhất cho AI 
            bestScore = score;
            move = { i, j };
          }
        }
      }
    }
    board[move.i][move.j] = ai;
    currentPlayer = human;
  }
  
  let scores = {
    X: 1,
    O: -1,
    hoa: 0
  };
  
  // Kiểm tra độ sâu và tối đa hóa
  function minimax(board, depth, isMaximizing) {
    let result = checkWinner(); // Kiểm tra người chiến thắng (sketch.js)
    if (result !== null) { // Nếu kết quả không phải là HÒA thì trả lại kết quả (ai) THẮNG hoặc (ai) THUA
      return scores[result];
    }
  
  // Tối đa hóa - AI sẽ thử tất cả các trường hợp có sẵn để chọn ra nước đi hiệu quả nhất (Điểm cao nhất)
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] == '') {
            board[i][j] = ai;
            let score = minimax(board, depth + 1, false);
            board[i][j] = '';
            bestScore = max(score, bestScore);
          }
        }
      }
      return bestScore;
    } else { // Nếu không thể tìm được nước đi hiệu quả nhất cho AI (Điểm cao nhất) thì hãy tìm điểm thấp nhất cho người chơi
      let bestScore = Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] == '') {
            board[i][j] = human;
            let score = minimax(board, depth + 1, true);
            board[i][j] = '';
            bestScore = min(score, bestScore);
          }
        }
        
      }
      return bestScore;
    }
  }
  