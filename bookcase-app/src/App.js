import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Book from "./components/Book";
import data from "./models/books.json";
import BookList from "./components/BookList";
import AboutUsPage from "./pages/About";
import Home from "./components/Home";
import Search from "./components/Search";

function App() {
  const [books] = useState(data);
  function addBook(title) {
    console.log(`The Book ‘${title}’ was clicked`);
  }
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route
              path="/bookcase"
              element={
                <BookList>
                  <Home />
                  <Search />
                  {books.map((book) => (
                    <Book
                      key={book.id}
                      book={book}
                      addBook={() => addBook(book.volumeInfo.title)}
                    />
                  ))}
                </BookList>
              }
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
