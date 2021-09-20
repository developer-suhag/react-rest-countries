import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, flag, capital, population, region } = props.country;
  return (
    <div className="country">
      <img src={flag} alt="" />
      <h3>{name}</h3>
      <p>
        <small>Region: {region}</small>
      </p>
      <p>{capital}</p>
      <p>Population: {population}</p>
    </div>
  );
};

export default Country;
