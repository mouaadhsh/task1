import React, { Component } from "react";
import "./img.css"
const Img = (props) => {
    return (
        <>
            <img className="Image" src= {props.path} alt="img" />

        </>
    )
}
export default Img