import React from "react";

export default function App() {
  const [clicked, setClick] = React.useState(false);

  if (clicked) {
    const h1 = React.createElement(
      "h1",
      {
        style: {
          // backgroundColor: "red",
          color: "black",
          border: "0",
          padding: "10px 20px",
          fontWeight: "bold",
          borderRadius: "5px",
          fontSize: "1.1em",
        },
      },
      "Hello World"
    );

    const paragraph = React.createElement(
      "p",
      {
        style: {
          // backgroundColor: "red",
          color: "black",
          border: "0",
          padding: "10px 20px",
          fontWeight: "bold",
          borderRadius: "5px",
          fontSize: "1.1em",
        },
      },
      "I am starting lerning React"
    );
    return React.createElement("div", null, [h1, paragraph]);
  } else {
    return React.createElement(
      "button",
      {
        style: {
          backgroundColor: "red",
          color: "#fff",
          border: "0",
          padding: "10px 20px",
          fontWeight: "bold",
          borderRadius: "5px",
          fontSize: "1.1em",
        },
        onClick: () => setClick(true),
      },
      "Click to Reveal"
    );
  }
}
