import {Component} from 'react'


// const Person = (props) => {
//   return (
//     <div>
//       <h1>I am {props.name} component</h1>
//       <h2>Extra Info: {props.children}</h2>
//     </div>
//   )
// }

class Person extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <h1>I am {this.props.name} component</h1>
        <h2>Extra Info: {this.props.children}</h2>
      </div>
  )
  }
}

export default Person;