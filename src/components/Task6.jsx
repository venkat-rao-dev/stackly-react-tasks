import { useState } from "react";
import "./Task6.css";

function Task6() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState("");
  const [isDraw, setIsDraw] = useState(false);

  const winningCombinations = [
    [0, 1, 2], // First row
    [3, 4, 5], // Second row
    [6, 7, 8], // Third row
    [0, 3, 6], // First column
    [1, 4, 7], // Second column
    [2, 5, 8], // Third column
    [0, 4, 8], // Main diagonal
    [2, 4, 6], // Other diagonal
  ];

  function handleClick(index) {
    // Do not allow clicking an occupied cell or after game ends
    if (board[index] !== "" || winner || isDraw) {
      return;
    }

    const updatedBoard = [...board];
    updatedBoard[index] = currentPlayer;

    setBoard(updatedBoard);

    // Check whether the current player has won
    const hasWon = winningCombinations.some((combination) => {
      return combination.every((cellIndex) => {
        return updatedBoard[cellIndex] === currentPlayer;
      });
    });

    if (hasWon) {
      setWinner(currentPlayer);
    } else if (updatedBoard.every((cell) => cell !== "")) {
      setIsDraw(true);
    } else {
      // Switch the player
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  }

  function handleRestart() {
    setBoard(Array(9).fill(""));
    setCurrentPlayer("X");
    setWinner("");
    setIsDraw(false);
  }

  return (
    <div className="task6-container">
      <div className="xo-card">
        <h1>XO Game</h1>
        <p className="xo-subtitle">Tic-Tac-Toe</p>

        {winner ? (
          <h2 className="xo-status">Player {winner} Wins!</h2>
        ) : isDraw ? (
          <h2 className="xo-status">It's a Draw!</h2>
        ) : (
          <h2 className="xo-status">
            Player {currentPlayer}'s Turn
          </h2>
        )}

        <div className="xo-board">
          {board.map((cell, index) => (
            <button
              key={index}
              className={`xo-cell ${cell === "X" ? "x-cell" : "o-cell"}`}
              onClick={() => handleClick(index)}
              disabled={cell !== "" || winner !== "" || isDraw}
            >
              {cell}
            </button>
          ))}
        </div>

        <button className="xo-restart" onClick={handleRestart}>
          Restart Game
        </button>
      </div>
    </div>
  );
}

export default Task6;
