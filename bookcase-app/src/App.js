import React, { useState } from "react";
import "./index.css";
import data from "./models/books.json";
import BookList from "./components/BookList";

const App = () => {
  const [books] = useState(data);

  return (
    <div className="container">
      <h1 className="title">Bookcase App</h1>
      <BookList books={books} />
    </div>
  );
};

export default App;
