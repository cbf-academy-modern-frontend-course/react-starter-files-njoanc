import PropTypes from "prop-types";

const Book = ({ book }) => {
  const {
    saleInfo: { retailPrice },
    volumeInfo: {
      title,
      authors,
      imageLinks: { thumbnail },
    },
  } = book;

  return (
    <div className="book">
      <h2>{title}</h2>
      <div>
        <img src={thumbnail} alt={title} />
        <br />
        by{" "}
        {authors.length ? (
          authors.join(" and ")
        ) : (
          <p style={{ color: "red" }}> No authors Listed</p>
        )}
        {retailPrice ? (
          <p>£{retailPrice.amount}</p>
        ) : (
          <p style={{ color: "red" }}>No price listed</p>
        )}
      </div>
    </div>
  );
};

Book.propTypes = {
  volumeInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    imageLinks: PropTypes.string.isRequired,
    // description: PropTypes.string.isRequired,
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
