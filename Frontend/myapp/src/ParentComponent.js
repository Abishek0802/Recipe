// ParentComponent component
import React, { useState } from "react";
import Athent from "./Athent";
import Sidenav from "./Sidenav";

export default function ParentComponent() {
  const [name, setName] = useState(""); // State to hold the name

  // Function to update the name
  const handleNameChange = (newName) => {
    setName(newName);
  };

  return (
    <div>
      {/* Pass setName function as props to Athent component */}
      <Athent setName={handleNameChange} />
      {/* Pass name state to Sidenav component */}
      <Sidenav name={name} />
    </div>
  );
}
