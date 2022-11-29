import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import BookList from "./components/BookList";
import Basket from "./components/Basket";
import Search from "./components/Search";
import About from "./pages/About";
import data from "./models/books.json";
import Pagination from "./components/Pagination";

const App = () => {
  const [books, setBooks] = useState(data);
  const [bookcase, setBookcase] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const maxResults = 40;

  const addToBookcase = (id) => {
    setBookcase(bookcase.concat(books.filter((book) => book.id === id)));

    setBooks([
      ...books.map((book) => {
        if (book.id === id) {
          book.read = true;
          console.log(`The Book '${book.volumeInfo.title}' was clicked`);
          if (
            book.saleInfo.retailPrice !== undefined &&
            typeof book.saleInfo.retailPrice.amount == "number"
          ) {
            setTotal(total + book.saleInfo.retailPrice.amount);
          }
        }
        return book;
      }),
    ]);
  };

  const removeFromBookcase = (id) => {
    const bookToRemove = bookcase.find((book) => book.id === id);
    if (
      bookToRemove.saleInfo.retailPrice !== undefined &&
      typeof bookToRemove.saleInfo.retailPrice.amount == "number"
    ) {
      setTotal(total - bookToRemove.saleInfo.retailPrice.amount);
    }
    setBookcase(bookcase.filter((book) => book.id !== id));
    setBooks([
      ...books.map((book) => {
        if (book.id === id) {
          book.read = false;
        }
        return book;
      }),
    ]);
  };

  useEffect(() => {
    document.title = `My Library ${bookcase.length} Read`;
    Array.from(document.getElementsByClassName("bookLink")).forEach((el) => {
      el.innerText = ` Bookcase (${bookcase.length})`;
    });
  });

  async function findBooks(value, page = 1) {
    if (!value || value.match(/^ *$/) !== null) {
      alert("Please enter a key word to search!");
      return false;
    }
    let startIndex = maxResults * (page - 1);
    let urlstring = encodeURIComponent(value.trim());
    let fetchUrl = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&filter=paid-ebooks&print-type=books&projection=lite&orderBy=newest&maxResults=${maxResults}&startIndex=${startIndex}`;
    console.log(fetchUrl);

    const results = await fetch(fetchUrl).then((res) => res.json());
    console.log(results);
    if (!results.error) {
      setCurrentPage(page);
      setTotalItems(results.totalItems);

      setBooks([
        ...results.items.map((result) => {
          if (bookcase.findIndex((book) => result.id === book.id) !== -1) {
            result.read = true;
          }
          return result;
        }),
      ]);
    }
  }

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Fragment>
                <Header bookLength={bookcase.length} />
                <Search
                  keyword={keyword}
                  findBooks={findBooks}
                  setKeyword={setKeyword}
                />
                <Basket total={total} />
                <Pagination
                  currentPage={currentPage}
                  totalItems={totalItems}
                  maxResults={maxResults}
                  keyword={keyword}
                  findBooks={findBooks}
                />
                <BookList
                  books={books}
                  stored="library"
                  addToBookcase={addToBookcase}
                  removeFromBookcase={removeFromBookcase}
                />
                <Pagination
                  currentPage={currentPage}
                  totalItems={totalItems}
                  maxResults={maxResults}
                  keyword={keyword}
                  findBooks={findBooks}
                />
              </Fragment>
            }
          />
          <Route
            path="/bookcase"
            element={
              <Fragment>
                <Header bookLength={bookcase.length} />
                <Basket total={total} />
                <BookList
                  books={bookcase}
                  stored="bookcase"
                  addToBookcase={addToBookcase}
                  removeFromBookcase={removeFromBookcase}
                />
              </Fragment>
            }
          />
          <Route
            path="/about"
            element={<About bookLength={bookcase.length} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
