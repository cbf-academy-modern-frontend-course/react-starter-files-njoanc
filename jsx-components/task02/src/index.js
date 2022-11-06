import React from "react";
import ReactDOM from "react-dom/client";
// import Profile from "./Profile";
import Greeting from "./Greeting";
function App() {
  return (
    //Replace the string below with the JSX Profile component
    // "Return the JSX Profile function as a JSX element here"
    <>
      {/* <Profile name="Jeanne" bio="I am a woman in Tech" /> */}
      <Greeting />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
