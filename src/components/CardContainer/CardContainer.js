import React from "react";
import "./CardContainer.css";
import cardsInfo from "../../cardsInfo";
import Card from "../Card/Card.js";

function importAll(r) {
  return r.keys().map(r);
}

function CardContainer(props) {
  const cardsImagesList = importAll(
    require.context("../../assets/pictures/cropped", false, /\.(jpeg)$/)
  );

  const cardsInfoList = Object.values(cardsInfo);

  function generateRandomArray(arrayLength) {
    let sequentialArray = Array.from(Array(arrayLength).keys());
    let randomArray = [];
    while (sequentialArray.length > 0) {
      const index = Math.floor(Math.random() * sequentialArray.length);
      randomArray.push(sequentialArray[index]);
      sequentialArray.splice(index, 1);
    }
    return randomArray;
  }

  function displayCards() {
    const randomArray = generateRandomArray(cardsInfoList.length);

    let cardsList = [];
    for (let i of randomArray) {
      const newCard = (
        <Card
          key={`key-${cardsInfoList[i].id}`}
          id={cardsInfoList[i].id}
          url={cardsImagesList[i]}
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
