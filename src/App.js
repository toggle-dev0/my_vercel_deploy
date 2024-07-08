import "./App.css";
import Header from "./components/Header/Header";
import "./components/Header/Header.css";
import Footer from "./components/Footer/Footer";
import "./components/Footer/Footer.css";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
