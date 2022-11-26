
const Person = (props) => {
  return (
    <div>
      <h1>I am {props.name} component</h1>
      <h2>Extra Info: {props.children}</h2>
    </div>
  )
}

export default Person;