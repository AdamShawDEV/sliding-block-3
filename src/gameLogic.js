export function createBoard(puzzleType) {
  let gameBoard = [];

  for (let row = 0; row < puzzleType; row++) {
    for (let col = 0; col < puzzleType; col++) {
      gameBoard.push({
        pos: {
          row,
          col,
        },
        bgPos: {
          row,
          col,
        },
        isBlank: row === puzzleType - 1 && col === puzzleType - 1,
      });
    }
  }
  return gameBoard;
}
