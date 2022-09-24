import React from "react";

import "./square.scss";

export default function Square(props) {
  function toggle() {
    if (props.value) return;
    props.onSquareClick(props.id);
  }

  // const squareClass = props.value === "X" ? "square_x" : ""

  let squareClass = "";
  if (props.value === "X") {
    squareClass = " square__text--x";
  } else if (props.value === "O") {
    squareClass = " square__text--o";
  }

  return (
    <div className="square" onClick={toggle}>
      <p className={`square__text${squareClass}`}>{props.value}</p>
    </div>
  );
}
