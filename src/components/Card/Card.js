import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card" id={props.id}>
      <img className="player-image" src={props.url} alt={props.alt}></img>
      <div className="full-name">{props.name}</div>
      <div className="short-name">{props.shortname}</div>
      <div className="nickname">{props.nickname}</div>
      <div className="born">{props.born}</div>
      <div className="position">{props.position}</div>
    </div>
  );
}

export default Card;
