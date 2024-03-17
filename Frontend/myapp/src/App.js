import "./App.css";
import Athent from "./Athent";
import Home from "./User/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import AdminHome from "./Admin/AdminHome";
import AddRecipe from "./Admin/AddRecipe";
import { createContext } from "react";
import { useContext } from "react";

export const TheContext = createContext();
// export const useText = () => useContext(TheContext);
function App() {
  const [name, setName] = useState(""); // State to hold the data
  const [selectedImage, setselectedImage] = useState(null);
  const [Recipename, setRecipename] = useState();
  const [noOfInceridient, setnoOfIncerident] = useState("");
  const [time, settime] = useState("");
  const [calories, setcalories] = useState("");
  const [items, setItems] = useState([]);

  const Addmodule = (newItem) => {
    setItems([...items, newItem]);
  };

  // const value = {
  //   Recipename,
  //   noOfInceridient,
  //   time,
  //   calories,
  // };

  // Function to update All

  const handleSelectImageChange = (value) => {
    setselectedImage(value);
  };
  const handleRecipeChange = (newName) => {
    setRecipename(newName);
  };
  const handleNoOfInceridientChange = (value) => {
    setnoOfIncerident(value);
  };
  const handleTimeChange = (value) => {
    settime(value);
  };
  const handleCalories = (value) => {
    setcalories(value);
  };
  const handleNameChange = (newName) => {
    setName(newName);
  };
  return (
    <>
      <div className="App">
        <TheContext.Provider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Athent setName={handleNameChange} />} />
              <Route path="/Home" element={<Home name={name} />} />
              <Route
                path="/Admin/AddRecipe"
                element={
                  <AddRecipe
                    Addmodule={Addmodule}
                    setselectedImage={handleSelectImageChange}
                    setRecipename={handleRecipeChange}
                    setnoOfIncerident={handleNoOfInceridientChange}
                    settime={handleTimeChange}
                    setcalories={handleCalories}
                  />
                }
              />
              <Route
                path="/Admin/AdminHome"
                element={<AdminHome name={name} items={items} />}
              />
            </Routes>
          </BrowserRouter>
        </TheContext.Provider>
      </div>
    </>
  );
}

export default App;
