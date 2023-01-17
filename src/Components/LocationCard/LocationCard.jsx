import React, { useState, useContext } from "react";
import "./LocationCard.css";
import Add from "../../Images/add.svg";
import CardContext from "../Main/context";

function LocationCard() {
  const [btn, setBtn] = useState(false);
  let name = "";
  const {cityName, setCityName} = useContext(CardContext)

// Check City Exist or not
  const callWeatherCard = () => {
    name=name.charAt(0).toUpperCase() + name.slice(1);
    if(!cityName.includes(name)){
      setCityName([...cityName,name]) 
    }else{
      alert('City Already exist')
    }
    setBtn(false);
  };
  
  const addCity = () => {
    setBtn(true);
  };
  return (
    <div className="locationCard">
      <button onClick={addCity}>
        <img src={Add} alt="plus" />
      </button>
      <p id="city">{btn?'':'Add New Location'}</p>
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
        <input type="submit" placeholder="City" className="btn-input" value={"Add City"} onClick={callWeatherCard} />
      )}
    </div>
  );
}

export default LocationCard;
