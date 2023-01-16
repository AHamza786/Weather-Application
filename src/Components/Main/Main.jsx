import React, { useState, useEffect } from "react";
import "./Main.css";
import LocationCard from "../LocationCard/LocationCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import CardContext from "./context";

const getList=()=>{
  let list = localStorage.getItem('cities')
  console.log(list);
  if (list) {
    return JSON.parse( localStorage.getItem('cities'))
  }else{
    return [];
  }
}

function Main() {
  const [cityName, setCityName] = useState(getList());

  const deleteWeatherCard = (item) => {
    const newCities = cityName?.filter((city) => {
      return city !== item;
    });
    setCityName(newCities);
  };


  useEffect(() => {
    localStorage.setItem('cities', JSON.stringify(cityName));
  }, [cityName]);

  return (
    <main className="main">
      {cityName?.map((item, i) => {
        
        return (
          <WeatherCard
            name={item}
            key={`${i}-${item}`}
            handleDelete={deleteWeatherCard}
          />
        );
      })}

      <CardContext.Provider value={{ cityName, setCityName }}>
        <LocationCard />
      </CardContext.Provider>
    </main>
  );
}

export default Main;
