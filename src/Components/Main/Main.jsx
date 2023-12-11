import React, { useState, useEffect } from "react";
import "./Main.css";
import LocationCard from "../LocationCard/LocationCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import CardContext from "./context";
import { getAllWeatherApi } from "../../api";

function Main() {
  const [weatherData, setWeatherData] = useState([]);

  const getAllWeather = async () => {
    try {
      const res = await getAllWeatherApi();
      setWeatherData(res?.data)
    } catch (error) {
      console.log(error);
    }
  }

  const deleteWeatherCard = (name) => {
    const filteredData = weatherData?.filter((item) => {
      return item?.name !== name;
    });
    setWeatherData(filteredData);
  };

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

    <CardContext.Provider value={{ weatherData, setWeatherData }}>
      <LocationCard />
    </CardContext.Provider>
  </main>
  );
}

export default Main;
