import React, { useState } from "react";
import "./App.css";
import authen from "./authen.jpg";
import { useNavigate } from "react-router-dom";

const User = {
  name: "Abishek",
  password: "abishek2002",
};
const Admin = {
  name: "Admin",
  password: "admin2002",
};

export default function Athent({ setName }) {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [headcolor, setheadcolor] = useState("lightgreen");
  const [imgShadow, setImgShadow] = useState("12px 12px 12px #818177");

  function handlename(e) {
    const namevalue = e.target.value;
    setname(namevalue);
  }
  function handlepassword(e) {
    const passwordvalue = e.target.value;
    setpassword(passwordvalue);
  }
  function Transfer() {
    if (name === "" && password === "") {
      alert(" name and pass should not be empty");
    }

    if (User.name === name && User.password === password) {
      console.log("Logged by User");
      // Call the function passed from the parent component to update the name state
      setName(name);
      setname("");
      setpassword("");
      navigate("/Home");
    } else if (Admin.name === name && Admin.password === password) {
      console.log("Logged by Admin");
      setName(name);
      setname("");
      setpassword("");
      navigate("/Admin/AdminHome");
    } else {
      console.log("Login Failed ");
      setname("");
      setpassword("");
      setImgShadow("12px 12px 12px red");

      const newcolor = headcolor === "lightgreen" ? "red" : "lightgreen";
      setheadcolor(newcolor);
      setTimeout(() => {
        setImgShadow("12px 12px 12px #818177");
        setheadcolor(headcolor);
      }, 2000);
    }
  }

  return (
    <>
      <div className="login">
        <h2 className="login-h2" style={{ color: headcolor }}>
          Authenticate
        </h2>
        <p className="p1" style={{ color: "white" }}>
          Name
        </p>
        <input
          onChange={handlename}
          type="text"
          value={name}
          required
          placeholder="Enter the Name..."
        />
        <p className="p2" style={{ color: "white" }}>
          Password
        </p>
        <input
          onChange={handlepassword}
          type="password"
          name=""
          id="bot"
          value={password}
          required
          placeholder="Enter the pass..."
        />
        <button
          style={{ backgroundColor: headcolor }}
          id="bot"
          onClick={Transfer}
        >
          Submit
        </button>
      </div>
      <img
        style={{ boxShadow: imgShadow }}
        className="img"
        src={authen}
        alt=""
      />
    </>
  );
}
