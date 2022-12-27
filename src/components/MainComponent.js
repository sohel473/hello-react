import { Component } from "react";
import bookList from "../assets/books";
import BookList from "./lists/Booklist";
import NewBook from "./representational/NewBook";
import { Route } from "react-router-dom";

class MainComponent extends Component {
  state = {
    books: bookList,
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

  render() {
    const books = (
      <BookList
        books={this.state.books}
        deleteBook={this.deleteBook}
        changeBook={this.onBookChange}
      />
    );

    return (
      <div className="App">
        <div className="nav-bar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/new-book">New Book</a>
            </li>
          </ul>
        </div>
        <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/new-book" render={() => <h1>New Book</h1>} />
      </div>
    );
  }
}

export default MainComponent;
