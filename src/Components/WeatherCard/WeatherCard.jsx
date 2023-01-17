import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherCard.css";
import { FaSpinner } from "react-icons/fa";
import Vector from "../../Images/Vector.svg";
import Sunny from "../../Images/Sunny.svg";
import Details from "../Details/Details";
import moment from "moment/moment";

function WeatherCard(props) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [btn, setBtn] = useState(false);
  const [Found, setFound] = useState(true);
  const {name, handleDelete} = props;
  // Use Effect
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=5a8917c2e0acb98c4f97397486dc92d3&units=metric`
        );
        setLoading(false);
        setData(response.data);
        
      } catch (error) {
        setFound(false);
        handleDelete(name);
        alert("City not Found");
      }
    };
    getData();
    // eslint-disable-next-line
  }, []);

  // Current Date
  const today = new Date();
  const date = moment(today).format("dddd MM/DD/YYYY");

  //  Vector Button show delete button
  const showbutton = () => {
    setBtn(!btn);
  };

  // Show Card or Not
  if (!Found) {
    return;
  } else {
    return (
      <div className="cardContainer">
        {loading ? (
          <div id="buttonload">
            <i>
              <FaSpinner /> Loading
            </i>
          </div>
        ) : (
          <>
            <div className="vector">
              <img src={Vector} alt="vector" onClick={showbutton} />
              {btn && (
                <div className="dropDown">
                  <button
                    className="dropDown-content"
                    onClick={() => handleDelete(name)}
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
                <h1 className="temp">{Math.trunc(data?.main?.temp||0)}</h1>
                <p>{data?.weather[0]?.main}</p>
              </div>
            </div>
            <Details
              visible={data?.visibility}
              human={data?.main?.humidity}
              Feel={data?.main?.feels_like}
              air={data?.wind?.speed}
            />
          </>
        )}
      </div>
    );
  }
}

export default WeatherCard;
