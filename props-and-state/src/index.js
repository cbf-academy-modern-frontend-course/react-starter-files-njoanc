import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import Button from "./components/Button";
// import ClickCounter from "./components/ClickCounter";
import data from "./models/headphones.json";
import "./index.css";
import GadgetList from "./components/GadgetList";
const mainStyle = { fontFamily: "Arial" };

const App = () => {
  // const headphones = [
  //   { id: 1, title: "Headphones 1", price: "£358.99" },
  //   { id: 2, title: "Headphones 2", price: "£358.9 " },
  //   { id: 3, title: "Headphones 3", price: "£358.98" },
  //   { id: 4, title: "Headphones 4", price: "£358.96" },
  //   { id: 5, title: "Headphone 5", price: "£358.94" },
  // ];
  // const [headphonesList] = useState(headphones);

  const [headphonesList] = useState(data);
  // const [counter, setCounter] = useState(0);

  // const handleClick = () => {
  //   setCounter(counter + 1);
  // };

  // const handleUnclick = () => {
  //   setCounter(counter - 1);
  // };

  return (
    <section style={mainStyle}>
      <h1>Electronics Store</h1>
      <GadgetList items={headphonesList} />
    </section>

    //   <div>
    //     <ClickCounter counter={counter} />
    //     <br />

    //     <Button
    //       handleClick={handleClick}
    //       text="Click"
    //       style={{ backgroundColor: "green" }}
    //     />
    //     <br />
    //     <br />

    //     <Button
    //       handleClick={handleUnclick}
    //       text="Unclick"
    //       style={{ backgroundColor: "brown" }}
    //     />
    // </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
