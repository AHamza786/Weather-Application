import React, { useState, useEffect } from "react";
import "./Main.css";
import LocationCard from "../LocationCard/LocationCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import CardContext from "./context";
import { getAllWeatherApi } from "../../api";

const getList = () => {
  let list = localStorage.getItem("cities");
  if (list) {
    return JSON.parse(localStorage.getItem("cities"));
  } else {
    return [];
  }
};

function Main() {
  const [cityName, setCityName] = useState(getList());
  const [weatherData, setWeatherData] = useState([]);

  const getAllWeather = async () => {
    try {
      const res = await getAllWeatherApi();
      setWeatherData(res?.data)
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteWeatherCard = (id) => {
    const filteredData = weatherData?.filter((item) => {
      return item?._id !== id;
    });
    setWeatherData(filteredData);
  };

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cityName));
  }, [cityName]);

  useEffect(()=>{
    getAllWeather()
  }, [])

  return (
    <main className="main">
    {weatherData && weatherData?.map((item, i) => {
      return (
        <WeatherCard
          data={item}
          key={`${i}-${item}`}
          handleDelete={deleteWeatherCard}
        />
      );
    })}

    <CardContext.Provider value={{ cityName, setCityName, weatherData, setWeatherData }}>
      <LocationCard />
    </CardContext.Provider>
  </main>
  );
}

export default Main;
