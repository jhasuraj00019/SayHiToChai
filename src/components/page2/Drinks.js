import React from "react";
import "./page2.css";

const Drinks = (props) => {
  const { drinks } = props;
  return (
    <>
      <div className="items heading">
        <h1>DRINKS</h1>
      </div>
      <br />
      {drinks.map((drinks) => {
        return (
          <div className="items">
            <span className="left">
              <img src={drinks.image} alt="brownie" />
            </span>
            <span className="rightpic">
              <h3>
                &#8377;
                {drinks.name}
                {drinks.price.padStart(28, "_")}
              </h3>
              <p>{drinks.description}</p>
            </span>
          </div>
        );
      })}
    </>
  );
};

export default Drinks;
