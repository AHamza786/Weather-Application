import React, { useState } from "react";
import "./WeatherCard.css";
import Vector from "../../Images/Vector.svg";
import Sunny from "../../Images/Sunny.svg";
import Details from "../Details/Details";
import moment from "moment/moment";
import { deleteWeatherByIdApi } from "../../api";

function WeatherCard(props) {
  const [btn, setBtn] = useState(false);
  const { data, handleDelete } = props;

  const today = new Date();
  const date = moment(today).format("dddd MM/DD/YYYY");

  const showbutton = () => {
    setBtn(!btn);
  };

  const deleteWeatherById = async (id) => {
    try {
      const response = await deleteWeatherByIdApi(id);
      handleDelete(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cardContainer">
      <>
        <div className="vector">
          <img src={Vector} alt="vector" onClick={showbutton} />
          {btn && (
            <div className="dropDown">
              <button
                className="dropDown-content"
                onClick={() => deleteWeatherById(data?._id)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
        <div className="info">
          <div className="icon">
            <img src={Sunny} alt="Sunny Weather" />
          </div>
          <header className="LocaDate">
            <p className="city">{data?.name}</p>
            <p className="date">{date}</p>
          </header>
        </div>
        <div className="weatherCard">
          <div className="weather">
            <h1 className="temp">{Math.trunc(data?.temperature || 0)}</h1>
            <p>{data?.atmosphere}</p>
          </div>
        </div>
        <Details
          visible={data?.visibility}
          human={data?.humidity}
          Feel={data?.feelLike}
          air={data?.windSpeed}
        />
      </>
    </div>
  );
}

export default WeatherCard;
