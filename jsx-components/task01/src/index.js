import React from "react";
import ReactDOM from "react-dom/client";

function Profile(name) {
  const personInfo = {
    name: "Jeanne",
  };
  const element = (
    <main id="content" role="main" className="base">
      <h1>{name}'s React Page</h1>
      <p>A woman in men's world</p>
    </main>
  );
  if (name.toLowerCase() === personInfo.name.toLowerCase()) {
    return element;
  }
  return (
    <main id="content" role="main" className="base">
      <h1>Just a React Page</h1>
      <p>Nothing to see here!</p>
    </main>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(Profile("Jeanne"));

ReactDOM.createRoot(document.getElementById("root")).render(Profile("Jeanne"));
