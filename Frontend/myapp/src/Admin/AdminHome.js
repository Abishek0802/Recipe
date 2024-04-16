import React, { useState } from "react";
import "../App.css";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AdminSidenav from "./AdminSidenav";
import { useText } from "../App.js";
import Potatofry from "../potatofry.jpg";

export default function AdminHome({
  name,
  Vegitems,
  NonVegitems,
  Snacksitems,
}) {
  // const { Recipename, noOfInceridient, time, calories } = useText();
  // console.log(Recipename);
  // console.log(Vegitems);
  // console.log(NonVegitems);

  const [StoredVegItems, setStoredVegItems] = useState([...Vegitems]);
  console.log(StoredVegItems);

  useEffect(() => {
    // Retrieve name from localStorage
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setWelcome(storedName);
    } else if (name) {
      // If name prop is provided, set the welcome state and store it in localStorage
      setWelcome(name);
      localStorage.setItem("name", name);
    }
  }, [name]);

  const [searchvalue, setsearchvalue] = useState("");
  const [out, setout] = useState("");

  const handleDelete = (index) => {
    const newVegItems = [...StoredVegItems];
    newVegItems.splice(index, 1);
    setStoredVegItems(newVegItems);
  };

  function search() {
    if (!searchvalue === "") {
      setout("Search Not Found");
    }
  }

  function handlesearch(e) {
    const value = e.target.value;
    setsearchvalue(value);
  }

  return (
    <>
      <div className="topbar">
        <div>
          <AdminSidenav name={name} />
        </div>
        <div className="searchbar">
          <input
            onChange={handlesearch}
            style={{ textIndent: "7px", borderRadius: "10px", width: "200px" }}
            type="text"
            placeholder="Search..."
            required
          />
          <span onClick={search}>
            <SearchIcon
              sx={{ color: "white", paddingTop: "5px", cursor: "pointer" }}
              fontSize="medium"
            />
          </span>
        </div>
        <div style={{ position: "relative", right: "10px" }}>
          <DarkModeIcon sx={{ color: "white" }} />
        </div>
      </div>
      <div style={{ color: "white" }}>{out}</div>

      {/* dummy data  */}
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
      {/* 
      Mapped items */}
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

      {/* Mapped NonVeg */}
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
