import { Component } from "react";
import bookList from "../assets/books";
import BookList from "./lists/Booklist";
import NewBook from "./representational/NewBook";

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
        <div className="nav-bar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/new">New Book</a>
            </li>
          </ul>
        </div>

        <h1 style={style}>Book List</h1>
        <button onClick={this.toggleBooks}>Toggle Books</button>
        {/* {console.log(books)} */}
        {books}
        <NewBook />
      </div>
    );
  }
}

export default MainComponent;
