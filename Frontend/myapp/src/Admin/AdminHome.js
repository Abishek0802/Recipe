import React, { useState } from "react";
import "../App.css";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AdminSidenav from "./AdminSidenav";
import { useText } from "../App.js";

export default function AdminHome({ name, items }) {
  // const { Recipename, noOfInceridient, time, calories } = useText();
  // console.log(Recipename);
  console.log(items);

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
      {/* <div>{Recipename}</div>
      <div>{noOfInceridient}</div>
      <div>{time}</div>
      <div>{calories}</div> */}
      <div className="display-map">
        {items.map((item, index) => (
          <div className="mappded" key={index}>
            <div>
              <img
                style={{
                  height: "260px",
                  width: "400px",
                  objectFit: "fill",
                  borderRadius: "10px",
                }}
                src={URL.createObjectURL(item.selectedImage)}
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
              {item.RecipeName}
            </div>
            <div className="last3">
              No of Inceridient: <p>{item.NoOfInceridient}</p>
            </div>
            <div className="last3">
              Time: <p>{item.Time}</p>{" "}
            </div>
            <div className="last3">
              Calories: <p>{item.Calories}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
