import React from "react";
import "./Country.css";

const Country = (props) => {
  return (
    <div className="country">
      <img src={props.flag} alt="" />
      <h3>{props.name}</h3>
      <p>{props.capital}</p>
      <p>Population: {props.population}</p>
    </div>
  );
};

export default Country;
