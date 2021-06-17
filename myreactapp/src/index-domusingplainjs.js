//DOM PROGRAMMING USING PLAIN JS
//Imperative dom programming
function createElement() {
    //create element
    var heading = document.createElement('h1')
    heading.innerHTML = 'Hello React!!!'
    var rootElement = document.getElementById('root')
    //attach on existing dom tree
    rootElement.appendChild(heading)
}
createElement();