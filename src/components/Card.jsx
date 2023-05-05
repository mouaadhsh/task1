import React, { Component } from "react";
import "./card.css";
import Img from "./Img.jsx";
import ETHIcon from "./images/icon-ethereum.svg";
import ClockIcon from "./images/icon-clock.svg";
const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="container">
          <Img path={props.img}></Img>
          <h2 className="title">{props.title || "title"}</h2>
          <p className="desc">
          {props.desc || "description"}
          </p>
         
          <div className="subDesc">
            
            <div className="price">
              <img src={ETHIcon} alt="Etherium" />
              <p>{props.price || "price"}</p>
            </div>
            <div className="timeLeft">
              <img src={ClockIcon} alt="Clock" />
              <p>{ props.timeLeft + " left" || "timeLeft"}</p>
            </div>
          </div>
          <hr />
          <div className="createdBy">
            <div className="profilePic">
              <img src={props.pfp} alt="Profile pic" />
            </div>
            <p>
              <span>Creation of </span>
              {props.Creator || "Jules Wyvern"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
