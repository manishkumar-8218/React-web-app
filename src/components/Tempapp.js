import React, { useEffect, useState } from "react";
import "./style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d21ef030caa746b94bedd59efa7e4652`;
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson.json)
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p>no data found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i class="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}</h1>
              <h3 className="tempmin_max">{city.temp}| {city.temp}</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
