import { Component } from "react";
import bookList from "../assets/books";
import BookList from "./lists/Booklist";
import NewBook from "./representational/NewBook";
import BookDetails from "./representational/BookDetails";
import { Route, NavLink } from "react-router-dom";

class MainComponent extends Component {
  state = {
    books: bookList,
    selectedBook: null,
  };

  selectedBookHandler = (bookId) => {
    const book = this.state.books.filter((book) => book.id === bookId)[0];
    // console.log(book);
    this.setState({
      selectedBook: book,
    });
  };

  render() {
    const books = (
      <BookList
        books={this.state.books}
        selectedBook={this.selectedBookHandler}
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
        <Route
          path="/:id"
          exact
          render={() => <BookDetails book={this.state.selectedBook} />}
        />
      </div>
    );
  }
}

export default MainComponent;
