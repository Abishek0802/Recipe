import "./App.css";
import Athent from "./Athent";
import Home from "./User/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import AdminHome from "./Admin/AdminHome";
import AddRecipe from "./Admin/AddRecipe";
import Catogries from "./Admin/Catogries";
import CatogriesVegRecipe from "./Admin/CatogriesVegRecipe";
import CatogriesNonVegRecipe from "./Admin/CatogriesNonVegRecipe";
import CatogriesSnacks from "./Admin/CatogriesSnacks";
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
  const [Vegitems, setVegItems] = useState([]);
  const [NonVegitems, setNonVegItems] = useState([]);
  const [Snacksitems, setSnacksItems] = useState([]);

  const VegAddmodule = (newItem) => {
    setVegItems([...Vegitems, newItem]);
  };

  const NonVegAddmodule = (newItem) => {
    setNonVegItems([...NonVegitems, newItem]);
  };
  const SnacksAddmodule = (newItem) => {
    setSnacksItems([...Snacksitems, newItem]);
  };

  // const handleDelete = (index) => {
  //   const newVegItems = [...Vegitems];
  //   const newNonVegitems = [...NonVegitems];
  //   const newSnacksitems = [...Snacksitems];
  //   newVegItems.splice(index, 1);
  //   newNonVegitems.splice(index, 1);
  //   newSnacksitems.splice(index, 1);
  //   setVegItems(newVegItems);
  //   setNonVegItems(newNonVegitems);
  //   setSnacksItems(newSnacksitems);
  // };

  // const value = {
  //   selectedImage,
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
                    VegAddmodule={VegAddmodule}
                    NonVegAddmodule={NonVegAddmodule}
                    SnacksAddmodule={SnacksAddmodule}
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
                element={
                  <AdminHome
                    name={name}
                    Vegitems={Vegitems}
                    NonVegitems={NonVegitems}
                    Snacksitems={Snacksitems}
                  />
                }
              />
              <Route path="/Admin/Catogries" element={<Catogries />}></Route>
              <Route
                path="/Admin/CatogriesVegRecipe"
                element={<CatogriesVegRecipe Vegitems={Vegitems} />}
              ></Route>
              <Route
                path="/Admin/CatogriesNonVegRecipe"
                element={<CatogriesNonVegRecipe NonVegitems={NonVegitems} />}
              ></Route>
              <Route
                path="/Admin/CatogriesSnacks"
                element={<CatogriesSnacks Snacksitems={Snacksitems} />}
              ></Route>
            </Routes>
          </BrowserRouter>
        </TheContext.Provider>
      </div>
    </>
  );
}

export default App;
