import React from "react";
import "./page2.css";

const Dessert = (props) => {
  const { desserts } = props;
  return (
    <>
      <div className="items heading">
        <h1>DESSERTS</h1>
      </div>
      <br/>
      {desserts.map((desserts) => {
        return (
          <div className="items">
            <span className="left">
              <img src={desserts.image} alt={desserts.name} />
            </span>
            <span className="rightpic">
              <h3>
                {desserts.name}
                ..................................................................................................
                {desserts.price}
              </h3>
              <p>{desserts.description}</p>
            </span>
          </div>
        );
      })}
    </>
  );
};

export default Dessert;
