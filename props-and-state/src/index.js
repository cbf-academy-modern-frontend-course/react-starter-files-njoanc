import React, { useState } from "react";
import ReactDOM from "react-dom/client";
//import data from './models/headphones.json';

import GadgetList from "./components/GadgetList";
const mainStyle = { fontFamily: "Arial" };

const App = () => {
  const headphones = [
    { id: 1, title: "Headphones 1", price: "£358.99" },
    { id: 2, title: "Headphones 2", price: "£358.9 " },
    { id: 3, title: "Headphones 3", price: "£358.98" },
    { id: 4, title: "Headphones 4", price: "£358.96" },
    { id: 5, title: "Headphone 5", price: "£358.94" },
  ];
  const [headphonesList] = useState(headphones);

  return (
    <section style={mainStyle}>
      <h1>Electronics Store</h1>
      <GadgetList items={headphonesList} />
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
