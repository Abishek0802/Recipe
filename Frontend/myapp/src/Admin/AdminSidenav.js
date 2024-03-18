import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import "../App.css";

export default function Sidenav({ name }) {
  const navigate = useNavigate();

  const [welcome, setWelcome] = useState("");

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

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  function Logout() {
    localStorage.removeItem("name"); // Remove name from localStorage on logout
    navigate("/", { replace: true });
  }
  function addrecipe() {
    navigate("/Admin/AddRecipe");
  }
  return (
    <div className="App">
      <Button onClick={toggleDrawer(true)}>
        <DehazeIcon sx={{ color: "white" }} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 300,
            backgroundColor: "#282c34",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <div className="sideheader">
            <h1 style={{ paddingLeft: "10px", color: "white" }}>Welcome</h1>
            <h2>{welcome}</h2>
          </div>
        </Box>
        <div className="sidecontent">
          <h4
            onClick={() => {
              navigate("/Admin/Catogries");
            }}
          >
            Categories
            <BarChartIcon
              sx={{
                color: "green",
                position: "relative",
                left: "5px",
                top: "5px",
              }}
            />
          </h4>
          <h4 onClick={addrecipe}>
            Add Recipe{" "}
            <AddBoxIcon
              sx={{
                color: "green",
                position: "relative",
                left: "0px",
                top: "6px",
              }}
            />
          </h4>
          <h4 onClick={Logout}>
            Logout
            <ExitToAppIcon
              sx={{
                color: "red",
                position: "relative",
                left: "5px",
                top: "7px",
              }}
            />
          </h4>
        </div>
      </Drawer>
    </div>
  );
}
