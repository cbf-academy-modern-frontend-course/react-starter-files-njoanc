import React from "react";
import "../index.css";
const BookList = (props) => {
  return <div className="container">{props.children}</div>;
};
export default BookList;
