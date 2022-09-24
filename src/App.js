import React from "react";

import Square from "./Square.js";
import "./main.scss";

const squares = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];
const winnerArrays = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [1, 4, 7],
  [2, 5, 8],
  [6, 7, 8],
  [2, 4, 6],
];
//every() reads everything in linear order so the first number has to be slected first in order for the other digits to be registered

export default function App() {
  const [player, setPlayer] = React.useState("X");
  const [xArray, setXArray] = React.useState([]);
  const [oArray, setOArray] = React.useState([]);
  let isXWon = false;
  let isOWon = false;

  function changePlayer() {
    setPlayer((currentState) => (currentState === "X" ? "O" : "X"));
  }

  function onSquareClick(id) {
    if (player === "X") {
      setXArray((currentState) => [...currentState, id]);
    }

    if (player === "O") {
      setOArray((currentState) => [...currentState, id]);
    }
    changePlayer();
  }

  function refresh() {
    setPlayer("X");
    setXArray([]);
    setOArray([]);
  }

  function xWinner(winnerItem) {
    const xWinnerIsWon = xArray.includes(winnerItem);
    return xWinnerIsWon;
  }

  function oWinner(winnerItem) {
    const oWinnerIsWon = oArray.includes(winnerItem);
    return oWinnerIsWon;
  }

  winnerArrays.forEach(function (winnerArray) {
    isXWon = isXWon ? isXWon : winnerArray.every(xWinner);
    isOWon = isOWon ? isOWon : winnerArray.every(oWinner);
    console.log("inside", { isXWon, isOWon });
  });

  const isTied = !isXWon && !isOWon;
  const xArrayFull = xArray.length > 4;
  const oArryaFull = oArray.length > 4;
  const fullGrid = xArrayFull || oArryaFull;

  function getStatus() {
    return "tie";
    console.log(isXWon);
    if (isXWon) {
      return "Winner: X";
    } else if (isOWon) {
      return "Winner: O";
    } else if (isTied && fullGrid) {
      return "Tie";
    } else {
      return `Next player: ${player}`;
    }
  }

  // console.log({ isXWon, isOWon });

  return (
    <div className="main">
      <div className="status">{getStatus()}</div>
      <div className="grid">
        {squares.map((square) => {
          const isX = xArray.includes(square.id);
          const isO = oArray.includes(square.id);
          const value = isX ? "X" : isO ? "O" : "";

          return (
            <Square
              key={square.id}
              id={square.id}
              value={value}
              onSquareClick={onSquareClick}
            />
          );
        })}
      </div>
      <button onClick={refresh} className="reset">
        Reset
      </button>
    </div>
  );
}
