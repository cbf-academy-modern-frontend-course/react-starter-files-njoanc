import React from "react";
import PropTypes from "prop-types";

const Book = ({ book, ...props }) => {
  //Nested Destructuring
  const {
    id,
    saleInfo: { retailPrice },
    volumeInfo: { title, authors, description },
  } = book;

  return (
    <div className="book">
      <img
        src={
          book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.thumbnail
            : "missing.png"
        }
        alt={title.length > 0 ? title : `Book id=${id}`}
      />
      <div className="text">
        <h2 title={title}>
          {title.length > 50 ? title.substring(0, 50) + "..." : title}
        </h2>
        <p className="author">
          by {authors ? authors.join(" and ") : "No Authors Listed"}
        </p>
        <p className="price">
          {retailPrice ? "£" + retailPrice.amount : "No Retail Price"}
        </p>
        <p className="description">
          {description
            ? description.substring(0, 200) + "..."
            : "No description"}
        </p>
      </div>
      <div>
        {props.stored === "library" ? (
          <button
            className="add-button"
            disabled={book.read}
            onClick={() => props.addToBookcase(id)}
          >
            + Add
          </button>
        ) : (
          <button
            className="remove-button"
            onClick={() => props.removeFromBookcase(id)}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default Book;

//Prop Types
Book.propTypes = {
  book: PropTypes.object.isRequired,
};
