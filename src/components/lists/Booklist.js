import Book from "../representational/Book";
import { withRouter, Link } from "react-router-dom";

const BookList = (props) => {
  // console.log(props);
  return props.books.map((book) => (
    <Link
      to={`/${book.id}`}
      key={book.id}
      style={{ color: "black", textDecoration: "none" }}
    >
      <Book
        name={book.bookName}
        writer={book.writer}
        selectedBook={props.selectedBook.bind(this, book.id)}
      />
    </Link>
  ));
};

export default withRouter(BookList);
