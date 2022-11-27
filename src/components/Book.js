import "../styles/Book.css";

const Book = (props) => {
  return (
    <div className="Book">
      <h3 onClick={props.delete}>Book: {props.name}</h3>
      <h4>Writer: {props.writer}</h4>
      <input type="text" onChange={props.onChange} value={props.name} />
    </div>
  );
};

export default Book;
