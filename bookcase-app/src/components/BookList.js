// import Book from "./Book";
import data from "../models/books.json";
import Book from "./Book";

const BookList = () => {
  const books = data;
  // return <Book books={books} />;

  return books.map((book) => <Book key={book.id} book={book} />);
};

export default BookList;
