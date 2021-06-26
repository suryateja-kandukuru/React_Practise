import React, { Component } from 'react'

export default class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    incrementCount() {
        this.setState((prevState) =>({
            count : prevState.count + 1
        }))
    }

    callCount() {
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
    }

    render() {
        return (
            <div>
                <br />
                Counter: { this.state.count }
                <br />
                <button onClick={ () => this.callCount() }>Increment</button>
            </div>
        )
    }
}