import Book from "./Book";

const BookList = ({ books }) => {
  return (
    <div className="list">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
