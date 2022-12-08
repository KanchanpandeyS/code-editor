import React from "react";
import header from "./Images/Header.jpg";

export default function Header() {
  return (
    <div id="header">
      <img src={header} alt="" height="70px" />
      <h2 id="title">Code Editor</h2>
      {/* <p>By Kanchan Pnadey</p> */}
    </div>
  );
}
