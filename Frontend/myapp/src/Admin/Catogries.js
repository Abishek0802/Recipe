import React from "react";
import { useNavigate } from "react-router-dom";

export default function Catogries() {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <div className="catogries-header">
        <h1 style={{ color: "wheat" }}>Catogries</h1>
        <h3 style={{ color: "red" }}>Home</h3>
      </div>
      <div className="catogries-content">
        <div
          onClick={() => {
            navigate("/Admin/CatogriesVegRecipe");
          }}
        >
          <h1>Veg-Recipe</h1>
        </div>
        <div
          onClick={() => {
            navigate("/Admin/CatogriesNonVegRecipe");
          }}
        >
          <h1>NonVeg-Recipe</h1>
        </div>
        <div
          onClick={() => {
            navigate("/Admin/CatogriesSnacks");
          }}
        >
          <h1>Snacks</h1>
        </div>
      </div>
      ;
    </>
  );
}
