import React from "react";
import BookList from "./components/BookList";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Bookcase App</h1>
      <BookList />
    </div>
  );
};

export default App;
