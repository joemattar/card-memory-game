import React from "react";
import "./CardContainer.css";
import cardsInfo from "../../cardsInfo";
import Card from "../Card/Card.js";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../assets/pictures/cropped", false, /\.(jpeg)$/)
);

function CardContainer(props) {
  function displayCards() {
    const cardsInfoList = Object.values(cardsInfo);
    let cardsList = [];
    for (let i = 0; i < cardsInfoList.length; i += 1) {
      const newCard = (
        <Card
          key={`key-${cardsInfoList[i].id}`}
          id={cardsInfoList[i].id}
          url={images[i]}
          alt={cardsInfoList[i].shortname}
          name={cardsInfoList[i].name}
          shortname={cardsInfoList[i].shortname.toUpperCase()}
          nickname={`"${cardsInfoList[i].nickname}"`}
          born={cardsInfoList[i].born}
          position={cardsInfoList[i].position}
          cardClickHandler={props.cardClickHandler}
        />
      );
      cardsList.push(newCard);
    }
    return cardsList;
  }

  return <div className="card-container">{displayCards()}</div>;
}

export default CardContainer;
