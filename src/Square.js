import React from "react";

export default function Square(props) {
  function toggle() {
    if (props.value) return;
    props.onSquareClick(props.id);
  }

  return (
    <div className="square" onClick={toggle}>
      <p className="square__text">{props.value}</p>
    </div>
  );
}
