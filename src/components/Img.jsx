import React, { Component } from "react";
import "./img.css";
import iconPath from "./images/icon-view.svg"
const Img = (props) => {
  return (
    <>
      <div className="imgCountainer">
        <img className="Image" src={props.path} alt="img" />
        <div class="overlay">
          <img src={iconPath} alt="view" />
        </div>
      </div>
    </>
  );
};
export default Img;
