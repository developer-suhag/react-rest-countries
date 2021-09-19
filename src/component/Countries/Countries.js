import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="countries">
      <h2>We are traveling all countries in the world.{countries.length}</h2>
      {countries.map((country) => (
        <Country
          flag={country.flag}
          name={country.name}
          capital={country.capital}
          population={country.population}
        ></Country>
      ))}
    </div>
  );
};

export default Countries;
