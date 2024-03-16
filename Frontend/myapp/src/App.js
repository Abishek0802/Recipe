import "./App.css";
import Athent from "./Athent";
import Home from "./Home";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Athent />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
