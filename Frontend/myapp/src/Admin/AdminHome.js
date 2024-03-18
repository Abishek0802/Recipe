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
  console.log(Vegitems);
  console.log(NonVegitems);

  const [searchvalue, setsearchvalue] = useState("");
  const [out, setout] = useState("");

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
        {Vegitems.map((Vegitem, index) => (
          <div className="mappded" key={index}>
            <div>
              <img
                style={{
                  height: "260px",
                  width: "400px",
                  objectFit: "fill",
                  borderRadius: "10px",
                }}
                src={URL.createObjectURL(Vegitem.selectedImage)}
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
              {Vegitem.RecipeName}
            </div>
            <div className="last3">
              No of Inceridient: <p>{Vegitem.NoOfInceridient}</p>
            </div>
            <div className="last3">
              Time: <p>{Vegitem.Time}</p>{" "}
            </div>
            <div className="last3">
              Calories: <p>{Vegitem.Calories}</p>
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
          </div>
        ))}
      </div>
    </>
  );
}
