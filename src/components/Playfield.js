import { useState } from "react";
import styles from "./modules/Playfield.module.css";
import { createBoard } from "../gameLogic";
import { BASE_BOARD_WIDTH_HEIGHT, BASE_TILE_GAP } from "../CONSTS";

function Playfield() {
  const puzzleType = 3;
  const [gameBoard, setGameBoard] = useState(() => createBoard(puzzleType));

  const tileWidthHeight =
    (BASE_BOARD_WIDTH_HEIGHT - BASE_TILE_GAP * (puzzleType - 1)) / puzzleType;
  return (
    <main className={styles.playfield}>
      <div className={styles.gameBoardContainer}>
        {gameBoard.map((tile, idx) =>
          tile.isBlank ? null : (
            <button
              key={idx}
              className={styles.tile}
              style={computedStyles.tile(tileWidthHeight, tile.pos)}
            >
              {idx}
            </button>
          )
        )}
      </div>
    </main>
  );
}

const computedStyles = {
  tile: (tileWidthHeight, pos) => ({
    width: tileWidthHeight,
    height: tileWidthHeight,
    top: (tileWidthHeight + BASE_TILE_GAP) * pos.row,
    left: (tileWidthHeight + BASE_TILE_GAP) * pos.col,
  }),
};

export default Playfield;
