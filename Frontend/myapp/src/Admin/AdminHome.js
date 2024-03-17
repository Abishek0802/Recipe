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
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <div>Recipename: {item.RecipeName}</div>
            <div>No of Inceridient: {item.NoOfInceridient}</div>
            <div>Time: {item.Time}</div>
            <div>Calories: {item.Calories}</div>
          </div>
        ))}
      </div>
    </>
  );
}
