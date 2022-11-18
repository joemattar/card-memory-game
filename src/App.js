import "./App.css";
import Header from "./components/Header/Header.js";
import Score from "./components/Score/Score";
import CardContainer from "./components/CardContainer/CardContainer";
import Footer from "./components/Footer/Footer.js";

function App() {
  document.title = "Card Memory Game";

  return (
    <div className="App">
      <Header />
      <div className="scores">
        <Score scoreType="Current Score" score={0} />
        <Score scoreType="High Score" score={0} />
      </div>
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;
