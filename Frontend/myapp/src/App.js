import "./App.css";
import Athent from "./Athent";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import AdminHome from "./AdminHome";

function App() {
  const [name, setName] = useState(""); // State to hold the name

  // Function to update the name
  const handleNameChange = (newName) => {
    setName(newName);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Athent setName={handleNameChange} />} />
          <Route path="/Home" element={<Home name={name} />} />
          <Route path="/AdminHome" element={<AdminHome name={name} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
