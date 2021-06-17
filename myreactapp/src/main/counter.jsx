import React, { Component } from 'react'


export class Counter extends Component {

    //declare data- ui /biz data
    state = {
        counter: 10        
    }
    //listener function
    onIncrement = evt => {
        //biz logic
        //this.state.counter = this.state.counter + 1
        //this.render()
        //pure function
        //setState(updater, [callback]) 
        //updater is function which should return immutable data
        //once data is returned , callback will be called for conformation
        // this.setState(function (prevState) {
        //     //should return new state 
        //     // return {
        //     //     counter: prevState.counter + 1
        //     // }
        //     //return Object.assign({}, prevState, { counter: prevState.counter + 1 })
        //     return { ...prevState, counter: prevState.counter + 1 }

        // }, function () {
        //     console.log('update finished')
        // })

        //arrow version
        this.setState(prevState => ({ ...prevState, counter: prevState.counter + 1 }
        ), () => console.log('updateFinished'))

    }

    render() {
        console.log(this.state)
        return <div>
            <h1>Counter {this.state.counter}</h1>
            <button onClick={this.onIncrement} className="btn btn-success">Increment</button>
        </div>
    }

}




