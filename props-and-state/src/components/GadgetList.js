import React from "react";
import "./index.css";

const GadgetList = (props) => {
  return (
    <main>
      <h2>Headphones</h2>
      {props.items.map((item) => (
        <div className="headphone" key={item.id}>
          <div>{item.title}</div>
          <div className="price">{item.price}</div>
        </div>
      ))}
    </main>
  );
};

export default GadgetList;
