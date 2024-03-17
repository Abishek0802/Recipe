import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import VegRecipeInput from "./VegRecipeInput";
import React from "react";
import "../App.css";
import NonVegRecipeInput from "./NonVegRecipeInput";
import SnacksInput from "./SnacksInput";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  height: 200,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

export default function AddRecipe({
  Addmodule,
  setRecipename,
  setselectedImage,
  setnoOfIncerident,
  settime,
  setcalories,
}) {
  const [openForVeg, setOpenForVeg] = React.useState(false);
  const handleOpenForVeg = () => setOpenForVeg(true);
  const handleCloseForVeg = () => setOpenForVeg(false);
  const [openForNonVeg, setOpenForNonVeg] = React.useState(false);
  const handleOpenForNonVeg = () => setOpenForNonVeg(true);
  const handleCloseForNonVeg = () => setOpenForNonVeg(false);
  const [openForSnacks, setOpenForSnacks] = React.useState(false);
  const handleOpenForSnacks = () => setOpenForSnacks(true);
  const handleCloseForSnacks = () => setOpenForSnacks(false);
  return (
    <>
      <div className="recipe-header">
        <h1 style={{ color: "wheat", position: "relative", left: "40%" }}>
          Add Items
        </h1>
        <h3
          style={{
            color: "red",
            position: "relative",
            right: "5%",
            top: "5px",
          }}
        >
          home
        </h3>
      </div>
      <div className="recipes">
        <Modal
          open={openForVeg}
          onClose={handleCloseForVeg}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <VegRecipeInput
              Addmodule={Addmodule}
              setRecipename={setRecipename}
              setselectedImage={setselectedImage}
              setnoOfIncerident={setnoOfIncerident}
              settime={settime}
              setcalories={setcalories}
            />
          </Box>
        </Modal>
        <Modal
          open={openForNonVeg}
          onClose={handleCloseForNonVeg}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <NonVegRecipeInput />
          </Box>
        </Modal>
        <Modal
          open={openForSnacks}
          onClose={handleCloseForSnacks}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <SnacksInput />
          </Box>
        </Modal>
        <div
          onClick={handleOpenForVeg}
          style={{
            backgroundColor: "black",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <h1>Veg-Recipe</h1>
        </div>
        <div
          onClick={handleOpenForNonVeg}
          style={{
            backgroundColor: "black",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <h1>Non-Veg-Recipe</h1>
        </div>
        <div
          onClick={handleOpenForSnacks}
          style={{
            backgroundColor: "black",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <h1>Snacks</h1>
        </div>
      </div>
    </>
  );
}
