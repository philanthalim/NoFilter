import React from "react";
import lovet from "../images/lovetHeart.jpeg";
const ViewShop = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "rgba(236,167,189,0.8)",
          height: "55vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
          position: "relative",
        }}
      >
        <img
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
            filter: "brightness(60%)",
          }}
          src={lovet}
          alt="lovet"
        ></img>
        <h3 style={{ position: "absolute", color: "white" }}>Lovet</h3>
      </div>
    </div>
  );
};

export default ViewShop;
