import "./App.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  document.title = "Card Memory Game";

  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
