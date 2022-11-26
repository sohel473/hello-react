import "../styles/Book.css";

const Book = (props) => {
  return (
    <div className="Book">
      <h3>Book: {props.name}</h3>
      <h4>Writer: {props.writer}</h4>
      <button onClick={props.change}>Change Books</button>
    </div>
  );
};

export default Book;
