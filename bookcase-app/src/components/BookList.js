import React from "react";
import Search from "./Search";
import "../index.css";
const BookList = (props) => {
  return (
    <div>
      <Search />
      <div className="container">{props.children}</div>;
    </div>
  );
};
export default BookList;
