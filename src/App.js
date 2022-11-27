import "./App.css";
import { Component } from "react";
import Book from "./components/Book";

// functional component
class App extends Component {
  state = {
    books: [
      { bookName: "1984", author: "George Orwell" },
      { bookName: "The Da Vinci Code", author: "Dan Brownl" },
      { bookName: "The Alchemist", author: "Paolo Cohelho" },
      { bookName: "Sherlock Holmes", author: "Arthur Conan Dowel" },
    ],
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
      books = this.state.books.map((book, index) => (
        <Book
          key={index}
          name={book.bookName}
          writer={book.author}
          delete={this.deleteBook.bind(this, index)}
          // onChange={(e) => this.onBookChange(e, index)}
          onChange={(e) => this.onBookChange(e, index)}
        />
      ));
    }

    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={this.toggleBooks}>Toggle Books</button>
        {console.log(this.state.books.showBooks)}
        {books}
      </div>
    );
  }
}

export default App;
