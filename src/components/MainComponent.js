import { Component } from "react";
import bookList from "../assets/books";
import BookList from "./lists/Booklist";
import NewBook from "./representational/NewBook";
import { Route, NavLink } from "react-router-dom";

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
        <nav className="nav-bar">
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/new-book">New Book</NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/" exact render={() => books} />
        <Route path="/new-book" exact component={NewBook} />
      </div>
    );
  }
}

export default MainComponent;
