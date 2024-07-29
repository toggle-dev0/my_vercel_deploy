import "./App.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Cartpage from "./pages/Cartpage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Homepage />} />
      </Route>
      <Route path="/Cartpage" element={<Header />}>
        <Route index element={<Cartpage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
