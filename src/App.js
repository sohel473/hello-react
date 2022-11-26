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

  changeState = (newBookName) => {
    this.setState({
      books: [
        { bookName: newBookName, author: "George Orwell 2" },
        { bookName: "The Da Vinci Code 2", author: "Dan Brownl 2" },
        { bookName: "The Alchemist 2", author: "Paolo Cohelho 2" },
        { bookName: "Sherlock Holmes 2", author: "Arthur Conan Dowel 2" },
      ],
    });
  };

  changeInputState = (e) => {
    this.setState({
      books: [
        { bookName: e.target.value, author: "George Orwell 2" },
        { bookName: "The Da Vinci Code 2", author: "Dan Brownl 2" },
        { bookName: "The Alchemist 2", author: "Paolo Cohelho 2" },
        { bookName: "Sherlock Holmes 2", author: "Arthur Conan Dowel 2" },
      ],
    });
  };
  render() {
    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white",
    };
    return (
      <div className="App">
        <h1 style={style}>Book List</h1>

        <button onClick={() => this.changeState("Ninteen Eighty Four")}>
          Change State
        </button>

        <br />

        <input type="text" onChange={this.changeInputState} />

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
          change={this.changeState.bind(this, "Ninteen 84")}
        />
      </div>
    );
  }
}

export default App;
