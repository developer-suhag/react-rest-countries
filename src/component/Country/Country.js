import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, flag, capital, population, region } = props.country;
  return (
    <div className="country">
      <img src={flag} alt="" />
      <h3 style={{ marginBottom: "5px" }}>{name}</h3>
      <p style={{ marginBottom: "5px" }}>
        <small>
          Region: <b>{region}</b>
        </small>
      </p>
      <h4 style={{ marginBottom: "10px" }}>Capital: {capital}</h4>
      <p>Population: {population}</p>
    </div>
  );
};

export default Country;
