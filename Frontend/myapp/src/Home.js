import React, { useState } from "react";
import "./App.css";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Sidenav from "./Components/Sidenav";

export default function Home() {
  const [searchvalue, setsearchvalue] = useState("");
  const [out, setout] = useState("");
  function search() {
    if (!searchvalue == "") {
      setout("Search Not Found");
    }
  }
  function handlesearch(e) {
    const value = e.target.value;
    setsearchvalue(value);
  }
  return (
    <>
      {" "}
      <div className="topbar">
        <div>
          <Sidenav />
        </div>
        <div className="searchbar">
          <input
            onChange={handlesearch}
            style={{ textIndent: "7px" }}
            type="text"
            placeholder="Search..."
            required
          />
          <span onClick={search}>
            <SearchIcon
              sx={{ color: "white", paddingTop: "5px" }}
              fontSize="medium"
            />
          </span>
        </div>
        <div style={{ position: "relative", right: "10px" }}>
          <DarkModeIcon sx={{ color: "white" }} />
        </div>
      </div>
      <div style={{ color: "white" }}>{out}</div>
    </>
  );
}