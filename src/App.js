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
  };
  render() {
    return (
      <div className="App">
        <h1>Book List</h1>
        <Book
          name={this.state.books[0].bookName}
          writer={this.state.books[0].author}
        />
        <Book
          name={this.state.books[1].bookName}
          writer={this.state.books[1].author}
        />
        <Book
          name={this.state.books[2].bookName}
          writer={this.state.books[2].author}
        />
        <Book
          name={this.state.books[3].bookName}
          writer={this.state.books[3].author}
        />
      </div>
    );
  }
}

export default App;
