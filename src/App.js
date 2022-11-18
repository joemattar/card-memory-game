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

  function cardClickHandler(event) {
    console.log(event.target);
    console.log(event.target.parentNode);

    setCurrentScore(currentScore + 1);
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
