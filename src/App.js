import { Component } from 'react';
import './App.css';
import  Person from './components/Person';

// functional component
// function App() {
//   return (
//     <div className='App'>
//       <h1>Hello</h1>
//       <Person />
//     </div>
//   );
// }

// class component
class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Hello React</h1>
        <Person>Some Info</Person>
        <Person name="Sohel"/>
        <Person name="Samir"/>
        <Person name="Osama"/>
        <Person name="Omar"/>
      </div>
    );
  }
}

export default App;
