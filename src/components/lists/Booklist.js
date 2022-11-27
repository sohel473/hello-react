import Book from "../representational/Book";

const BookList = (props) => {
  return props.books.map((book, index) => (
    <Book
      key={index}
      name={book.bookName}
      writer={book.author}
      delete={props.deleteBook.bind(this, index)}
      onChange={(e) => props.changeBook(e, index)}
    />
  ));
};

export default BookList;
