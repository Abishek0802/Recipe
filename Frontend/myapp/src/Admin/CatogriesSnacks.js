import React from "react";
import Potatofry from "../potatofry.jpg";

export default function CatogriesVegRecipe({ Snacksitems }) {
  return (
    <>
      {/* Dummy Data */}
      <h1 style={{ color: "lightgreen" }}>Snacks</h1>
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
        {Snacksitems.map((Snacksitem, index) => (
          <div className="mappded" key={index}>
            <div>
              <img
                style={{
                  height: "260px",
                  width: "400px",
                  objectFit: "fill",
                  borderRadius: "10px",
                }}
                src={URL.createObjectURL(Snacksitem.selectedImage)}
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
              {Snacksitem.RecipeName}
            </div>
            <div className="last3">
              No of Inceridient: <p>{Snacksitem.NoOfInceridient}</p>
            </div>
            <div className="last3">
              Time: <p>{Snacksitem.Time}</p>{" "}
            </div>
            <div className="last3">
              Calories: <p>{Snacksitem.Calories}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
