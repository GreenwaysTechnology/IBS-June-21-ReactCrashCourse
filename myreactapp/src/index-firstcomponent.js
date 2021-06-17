import React from 'react'; //React is Object/Class having all fundamentals apis
import ReactDOM from 'react-dom' //ReactDOM is object used to insert vdom elements into real dom

//component
const Heading = <h1>Hello React!!</h1>

ReactDOM.render(Heading, document.getElementById('root'))