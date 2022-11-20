import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Score from "./components/Score/Score";
import CardContainer from "./components/CardContainer/CardContainer";
import Footer from "./components/Footer/Footer.js";

function App() {
  document.title = "Card Memory Game";

  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  function cardClickHandler(event) {
    // Grap target card node from click
    let targetCard;
    if (event.target.getAttribute("class") === "card") {
      targetCard = event.target;
    } else if (event.target.parentNode.getAttribute("class") === "card") {
      targetCard = event.target.parentNode;
    }

    console.log(targetCard.getAttribute("id"));

    // If card is not already clicked, add to clicked cards array, increase current score
    // If card already clicked, reset clicked cards array, reset current score
    if (clickedCards.includes(targetCard.getAttribute("id")) === false) {
      setClickedCards(clickedCards.concat(targetCard.getAttribute("id")));
      setCurrentScore(currentScore + 1);
    } else if (clickedCards.includes(targetCard.getAttribute("id")) === true) {
      setClickedCards([]);
      setCurrentScore(0);
    }
  }

  function checkHighScore() {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  }

  useEffect(() => checkHighScore());

  return (
    <div className="App">
      <Header />
      <div className="scores">
        <Score scoreType="Current Score" score={currentScore} />
        <Score scoreType="High Score" score={highScore} />
      </div>
      <CardContainer cardClickHandler={cardClickHandler} />
      <Footer />
    </div>
  );
}

export default App;
