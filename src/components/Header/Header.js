import React from "react";
import "./Header.css";
import logo from "../../assets/pictures/Hockey-Canada.png";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div>
        <div>CARD MEMORY GAME</div>
        <div className="instructions">
          SCORE POINTS BY CLICKING ON EACH IMAGE ONLY ONCE!
        </div>
      </div>
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo" />
      </div>
    </header>
  );
}

export default Header;
