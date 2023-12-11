import React, { useState, useContext } from "react";
import "./LocationCard.css";
import Add from "../../Images/add.svg";
import CardContext from "../Main/context";
import axios from "axios";
import moment from "moment/moment";
import { addWeatherApi } from "../../api";

function LocationCard() {
  const [btn, setBtn] = useState(false);
  let name = "";
  const [loading, setLoading] = useState(false);
  const { weatherData, setWeatherData } =
    useContext(CardContext);

  const getWeatherData= async (name) => {
    setLoading(true);
    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=5a8917c2e0acb98c4f97397486dc92d3&units=metric`
    )
      .then(async (response) => {
        const currentDate = new Date();
        const formattedWeatherData = {
          name: response.data.name,
          temperature: response.data.main.temp,
          atmosphere: response.data.weather[0].main,
          feelLike: response.data.main.feels_like,
          humidity: response.data.main.humidity,
          visibility: response.data.visibility,
          windSpeed: response.data.wind.speed,
          date: moment(currentDate).format("dddd MM/DD/YYYY"),
        };
        try {
          const res = await addWeatherApi(formattedWeatherData);
          setWeatherData([...weatherData, formattedWeatherData]);
        } catch (error) {
          alert(error?.response?.data?.message);
        }
      })
      .catch((error) => {
        alert(`City not found: ${name}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const weatherCardHandler = () => {
    if(!name){
      alert("Please Enter city name")
    }else{
      name = name.trim().toLowerCase();
      name = name.charAt(0).toUpperCase() + name.slice(1);
      getWeatherData(name);
    }
  };

  const addCity = () => {
    setBtn(!btn);
  };
  return (
    <>
      {loading ? (
        <div className="locationCard loading-container">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      ) : (
        <div className={`locationCard ${btn && `gap_16`}`}>
          <button onClick={addCity}>
            <img src={Add} alt="plus" />
          </button>
          {!btn && <p id="city">Add New Location</p>}
          {btn && (
            <input
              id="inputField"
              type="text"
              placeholder="Enter The City"
              onChange={(event) => {
                name = event.target.value;
              }}
            />
          )}
          {btn && (
            <input
              type="submit"
              placeholder="City"
              className="btn-input"
              value={"Add City"}
              onClick={weatherCardHandler}
            />
          )}
        </div>
      )}
    </>
  );
}

export default LocationCard;
