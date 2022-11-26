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
        <h1>Hello</h1>
        <Person />
      </div>
    );
  }
}

export default App;
