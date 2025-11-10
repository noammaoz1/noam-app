"use client";
import { useState } from "react";
import Confetti from "react-confetti-boom";
import styles from "./page.module.css";

// The Square component represents a single square on the board.
// It receives its current value ('X', 'O', or null) and a click handler from the parent Board component.
function Square({ value, onSquareClick }: { value: string | null, onSquareClick: () => void }) {
  // Determine the class name based on the square's value (X, O, or empty)
  const squareClass = value === 'X' ? styles['square-x'] : value === 'O' ? styles['square-o'] : '';
  return (
    <button className={`${styles.square} ${squareClass}`} onClick={onSquareClick}>
      {value}
    </button>
  );
}

// The Board component is the main component for the tic-tac-toe game.
export default function Board() {
  // State to track if 'X' is the next player.
  const [xIsNext, setXIsNext] = useState(true);

  // State to store the values of all 9 squares on the board.
  const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null));

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    // Create a copy of the squares array to avoid direct mutation.
    const nextSquares = squares.slice();
    // Set the value of the clicked square to 'X' or 'O' based on whose turn it is.
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    // Toggle the turn to the next player.
    setXIsNext(!xIsNext);
  }

  // This function resets the game to its initial state.
  function handlePlayAgain() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  // Calculate the winner on every render.
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (!squares.includes(null)) {
    status = "It's a tie!";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    // The main game container, centered using CSS.
    <div className={styles.game} >
      {winner && <Confetti mode="boom" particleCount={50} />}
      <div className={styles.status} >{status}</div>
      <div className={styles.boardContainer}>
        <div>
          {/* Each div with "board-row" class represents a row of squares. */}
          <div className={styles["board-row"]}>
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>
          <div className={styles["board-row"]}>
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>
          <div className={styles["board-row"]}>
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          </div>
        </div>
      </div>
      <button className={styles.playAgainButton} onClick={handlePlayAgain}>
        Play Again
      </button>
    </div>
  );
}

function calculateWinner(squares: Array<string | null>): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  // Loop through all the winning lines.
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}