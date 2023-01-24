import React, { useState, useEffect } from "react";
import "./Main.css";
import LocationCard from "../LocationCard/LocationCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import CardContext from "./context";
<<<<<<< HEAD
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
=======
>>>>>>> ade1558 (last)

const getList = () => {
  let list = localStorage.getItem("cities");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("cities"));
  } else {
    return [];
  }
};

function Main() {
  const [cityName, setCityName] = useState(getList());

  const deleteWeatherCard = (item) => {
    const newCities = cityName?.filter((city) => {
      return city !== item;
    });
    setCityName(newCities);
  };

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cityName));
  }, [cityName]);

  return (
<<<<<<< HEAD
    <DragDropContext
      onDragEnd={(...props) => {
        console.log(...props);
      }}
    >
      <Droppable droppableId="droppable-1">
        {(provided, _) => (
          <main
            className="main"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {cityName?.map((item, i) => {
              return (
                <Draggable
                  key={item}
                  draggableId={"droppableId-" + item}
                  index={i}
                >
                  {(provided, _) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <WeatherCard
                        name={item}
                        key={`${i}-${item}`}
                        handleDelete={deleteWeatherCard}
                      />
                    </div>
                  )}
                </Draggable>
              );
            })}
            <CardContext.Provider value={{ cityName, setCityName }}>
              <LocationCard />
            </CardContext.Provider>
            {provided.placeholder}
          </main>
        )}
      </Droppable>
    </DragDropContext>
=======
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
>>>>>>> ade1558 (last)
  );
}

export default Main;
