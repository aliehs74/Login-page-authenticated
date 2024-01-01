import React from "react";
import ReactLoading from "react-loading";
import "./Loading.css";
// types: blank-balls-bars-bubbles-cubes-cylon-spin-spinningBubbles-spokes
export default function Loading(type = "cylon", color = "red") {
  return (
    <ReactLoading
      type={type}
      color={color}
      height={"100vh"}
      width={"100vw"}
      className="Loading"
    />
  );
}
