import React from "react";
import Potatofry from "../potatofry.jpg";

export default function CatogriesNonVegRecipe({ NonVegitems }) {
  return (
    <>
      {/* Dummy Data */}
      <h1 style={{ color: "lightgreen" }}>NonVegRecipes</h1>
      <div className="display-map">
        <div className="mappded">
          <div>
            <img
              style={{
                height: "260px",
                width: "400px",
                objectFit: "fill",
                borderRadius: "10px",
              }}
              src={Potatofry}
              alt=""
            />
          </div>
          <div
            style={{
              position: "relative",
              right: "40%",
              fontStyle: "italic",
              color: "lightgreen",
            }}
          >
            Potatofry
          </div>
          <div className="last3">
            No of Inceridient: <p>7</p>
          </div>
          <div className="last3">
            Time: <p>20 Min</p>{" "}
          </div>
          <div className="last3">
            Calories: <p>240 Calories</p>
          </div>
        </div>
      </div>

      {/* Mapped Data */}
      <div className="display-map">
        {NonVegitems.map((NonVegitem, index) => (
          <div className="mappded" key={index}>
            <div>
              <img
                style={{
                  height: "260px",
                  width: "400px",
                  objectFit: "fill",
                  borderRadius: "10px",
                }}
                src={URL.createObjectURL(NonVegitem.selectedImage)}
                alt=""
              />
            </div>
            <div
              style={{
                position: "relative",
                right: "40%",
                fontStyle: "italic",
                color: "lightgreen",
              }}
            >
              {NonVegitem.RecipeName}
            </div>
            <div className="last3">
              No of Inceridient: <p>{NonVegitem.NoOfInceridient}</p>
            </div>
            <div className="last3">
              Time: <p>{NonVegitem.Time}</p>{" "}
            </div>
            <div className="last3">
              Calories: <p>{NonVegitem.Calories}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
