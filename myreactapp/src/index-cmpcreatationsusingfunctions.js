import React from 'react';
import ReactDOM from 'react-dom'

//component creations:functions

// function Heading() {
//     return <h1>Hello React!!</h1> //object
// }
// const Heading = () => {
//     return  <h1>Hello React!!</h1>
// }
const Heading = () => <h1>Hello React!!</h1>


//calling component function in imperative way: not recommended
//ReactDOM.render(Heading(), document.getElementById('root'))

//Calling component in declarative
ReactDOM.render(<Heading></Heading>, document.getElementById('root'))