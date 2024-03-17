import React from "react";
import { useState } from "react";
import "../App.css";

export default function VegRecipeInput({
  Addmodule,
  setRecipename,
  setselectedImage,
  setnoOfIncerident,
  settime,
  setcalories,
}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [RecipeName, setRecipeName] = useState("");
  const [NoOfInceridient, setNoOfIncerident] = useState("");
  const [Time, setTime] = useState("");
  const [Calories, setCalories] = useState("");

  function handleRecipe(event) {
    const recipeNameValue = event.target.value;
    setRecipeName(recipeNameValue);
    console.log(event.target.value);
  }
  function handleNoIncerident(event) {
    const NoOfIncredientValue = event.target.value;
    setNoOfIncerident(NoOfIncredientValue);
    console.log(event.target.value);
  }
  function handleTime(event) {
    const TimeValue = event.target.value;
    setTime(TimeValue);
    console.log(event.target.value);
  }
  function handleCalories(event) {
    const CaloriesValue = event.target.value;
    setCalories(CaloriesValue);
    console.log(event.target.value);
  }

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Addmodule({ RecipeName, selectedImage, NoOfInceridient, Time, Calories });
    setRecipename(RecipeName);
    setselectedImage(selectedImage);
    setnoOfIncerident(NoOfInceridient);
    settime(Time);
    setcalories(Calories);
    // Perform upload logic here
    if (selectedImage) {
      console.log("Selected image:", selectedImage);
      // You can upload the image to your server or process it further
    } else {
      console.log("No image selected");
    }
  };
  return (
    <>
      <div className="veg">
        {" "}
        <input
          required
          onChange={handleImageChange}
          style={{ position: "relative", left: "15px", width: "200px" }}
          type="file"
          accept="image/*"
        />
        <input
          required
          onChange={handleRecipe}
          type="text"
          placeholder="Recipe Name"
        />{" "}
        <input
          required
          onChange={handleNoIncerident}
          type="number"
          placeholder="No of Incredient"
        />
        <input required onChange={handleTime} type="text" placeholder="Time" />
        <input
          required
          onChange={handleCalories}
          type="text"
          placeholder="Enter the Calories"
        />
      </div>
      <div className="vegbtn">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}
