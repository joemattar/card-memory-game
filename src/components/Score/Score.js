import React from "react";
import "./Score.css";

function Score(props) {
  return (
    <div className="score">
      <div>{`${props.scoreType}: ${props.score}`}</div>
    </div>
  );
}

export default Score;
