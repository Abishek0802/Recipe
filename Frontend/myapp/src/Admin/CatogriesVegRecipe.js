import React, { useState, useEffect } from "react";
import Potatofry from "../potatofry.jpg";

export default function CatogriesVegRecipe({ Vegitems }) {
  const [StoredVegItems, setStoredVegItems] = useState([]);

  useEffect(() => {
    setStoredVegItems([...Vegitems]);
  }, [Vegitems]);

  const handleDelete = (index) => {
    const newVegItems = [...StoredVegItems];
    newVegItems.splice(index, 1);
    setStoredVegItems(newVegItems);
  };

  return (
    <>
      {/* Dummy Data */}
      <h1 style={{ color: "lightgreen" }}>VegRecipes</h1>
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
        {StoredVegItems.map((StoredVegItem, index) => (
          <div className="mappded" key={index}>
            <div>
              <img
                style={{
                  height: "260px",
                  width: "400px",
                  objectFit: "fill",
                  borderRadius: "10px",
                }}
                src={URL.createObjectURL(StoredVegItem.selectedImage)}
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
              {StoredVegItem.RecipeName}
            </div>
            <div className="last3">
              No of Inceridient: <p>{StoredVegItem.NoOfInceridient}</p>
            </div>
            <div className="last3">
              Time: <p>{StoredVegItem.Time}</p>{" "}
            </div>
            <div className="last3">
              Calories: <p>{StoredVegItem.Calories}</p>
            </div>
            <div>
              <button
                onClick={() => {
                  handleDelete(index);
                }}
                style={{ color: "red", marginTop: "20px" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
