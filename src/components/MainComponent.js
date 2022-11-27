import { Component } from "react";
import "../App.css";
import bookList from "../assets/books";
import BookList from "./lists/Booklist";

class MainComponent extends Component {
  state = {
    books: bookList,
    showBooks: true,
  };

  deleteBook = (index) => {
    const books = [...this.state.books];
    books.splice(index, 1);
    this.setState({
      books: books,
    });
  };

  onBookChange = (e, index) => {
    const book = this.state.books[index];
    book.bookName = e.target.value;
    const books = [...this.state.books];
    books[index] = book;
    this.setState({
      books: books,
    });
  };

  toggleBooks = () => {
    this.setState({
      showBooks: !this.state.showBooks,
    });
  };

  render() {
    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white",
    };

    let books = null;
    if (this.state.showBooks) {
      books = (
        <BookList
          books={this.state.books}
          deleteBook={this.deleteBook}
          changeBook={this.onBookChange}
        />
      );
    }

    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={this.toggleBooks}>Toggle Books</button>
        {/* {console.log(books)} */}
        {books}
      </div>
    );
  }
}

export default MainComponent;
