import PropTypes from "prop-types";
import "../index.css";

const Book = ({ book, addBook }) => {
  const {
    saleInfo: { retailPrice },
    volumeInfo: {
      title,
      authors,
      imageLinks: { thumbnail },
      description,
    },
  } = book;

  return (
    <div className="book">
      <img src={thumbnail} alt={title} />
      <div>
        <h2>{title}</h2>
        <br />
        by{" "}
        {authors.length > 1 ? (
          authors.join(" and ")
        ) : (
          <p style={{ color: "red" }}> No authors Listed</p>
        )}
        {retailPrice ? (
          <p>
            <strong>£{retailPrice.amount}</strong>
          </p>
        ) : (
          <p style={{ color: "red" }}>No price listed</p>
        )}
        <p>{description.substring(0, 250)}...</p>
      </div>
      <div>
        <button className="button" onClick={addBook}>
          Add +
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  volumeInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    imageLinks: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  saleInfo: PropTypes.shape({
    retailPrice: PropTypes.shape({
      amount: PropTypes.string.isRequired,
    }),
  }),
};

Book.defaultProps = {
  saleInfo: {
    retailPrice: {
      amount: "No price provided",
    },
  },
};
export default Book;
