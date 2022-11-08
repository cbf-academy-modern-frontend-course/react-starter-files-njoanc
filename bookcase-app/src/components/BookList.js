import data from "../models/books.json";
import Book from "./Book";

const BookList = () => {
  const books = data;

  return (
    <div className="list">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
