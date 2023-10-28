import React from "react";
import { MdCheckCircle } from "react-icons/md";

const Green = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <h2 style={{ marginTop: "30px" }}>
        Your Registration has been Successful
      </h2>
      <MdCheckCircle size={100} color="green" />
    </div>
  );
};

export default Green;
