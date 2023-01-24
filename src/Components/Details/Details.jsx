import React from "react";
import "./Details.css";
import Line from "../../Images/Line.svg";
import Eye from "../../Images/wind-direction-icon.svg";
import Therma from "../../Images/therma.svg";
import Humidity from "../../Images/humidity.SVG";
import Wind from "../../Images/wind.svg";

function Details(props) {

  return (
    <div className="details">
      <div className="atmosphare">
        <div className="atmoInfo">
          <div className="icontitle">
            <img src={Eye} alt="eye icon" />
            <p>Visibility</p>
          </div>
          <p>{props.visible}</p>
        </div>
        <img src={Line} alt="line" />
        <div className="atmoInfo">
          <div className="icontitle">
            <img src={Therma} alt="therma" />
            <p>Feels like</p>
          </div>
          <p>{props.Feel}<sup>&deg;C</sup></p>
        </div>
      </div>

      <div className="atmosphare">
        <div className="atmoInfo">
          <div className="icontitle">
            <img src={Humidity} alt="humidity" />
            <p>Humidity </p>
          </div>
          <p>{props.human}KM</p>
        </div>
        <img src={Line} alt="line" />
        <div className="atmoInfo">
          <div className="icontitle">
            <img src={Wind} alt="wind" />
            <p>Wind &nbsp; &nbsp; &nbsp;</p>
          </div>

          <p>{props.air} KM</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
