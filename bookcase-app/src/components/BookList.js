import React from "react";
import "../index.css";
const BookList = (props) => {
  return (
    <div>
      <div className="container">{props.children}</div>;
    </div>
  );
};
export default BookList;
