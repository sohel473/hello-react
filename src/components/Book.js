const Book = (props) => {
  return (
    <div>
      <h3>Book: {props.name}</h3>
      <h4>Writer: {props.writer}</h4>
      <button onClick={props.changeState}>Change Books</button>
    </div>
  );
};

export default Book;
