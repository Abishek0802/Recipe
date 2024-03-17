import "./App.css";
import Athent from "./Athent";
import Home from "./User/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import AdminHome from "./Admin/AdminHome";
import AddRecipe from "./Admin/AddRecipe";

function App() {
  const [name, setName] = useState(""); // State to hold the data
  const [selectedImage, setSelectedImage] = useState(null);
  const [Recipename, setRecipename] = useState("");
  const [NoOfInceridient, setNoOfIncerident] = useState("");
  const [Time, setTime] = useState("");
  const [Calories, setCalories] = useState("");

  // Function to update All
  const handleRecipeChange = (newName) => {
    setRecipename(newName);
  };
  const handleNameChange = (newName) => {
    setName(newName);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Athent setName={handleNameChange} />} />
          <Route path="/Home" element={<Home name={name} />} />
          <Route
            path="/Admin/AddRecipe"
            element={<AddRecipe setRecipename={handleRecipeChange} />}
          />
          <Route
            path="/Admin/AdminHome"
            element={<AdminHome name={name} Recipename={Recipename} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
