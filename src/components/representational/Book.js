import "../../styles/Book.css";
import { withRouter } from "react-router";

const Book = (props) => {
  // console.log(props);
  return (
    <div className="Book" onClick={props.selectedBook}>
      <h3>Book: {props.name}</h3>
      <h4>Writer: {props.writer}</h4>
    </div>
  );
};

export default withRouter(Book);
