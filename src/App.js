import "./App.css";
import Header from "./components/Header/Header.js";
import CardContainer from "./components/CardContainer/CardContainer";
import Footer from "./components/Footer/Footer.js";

function App() {
  document.title = "Card Memory Game";

  return (
    <div className="App">
      <Header />
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;
