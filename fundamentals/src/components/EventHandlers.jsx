import React, { Component } from 'react'

export default class EventHandlers extends Component {

    constructor() {
        super() 
        this.state = {
            msg: 'Hello there!'
        }
    }

    handle = () =>{
        this.setState(() => ( {
            msg: 'Welcome' 
        }
        ))
    }

    

    render() {
        return (
           <div>
                <div>{ this.state.msg }</div>
            <button onClick={ this.handle }>Button</button>
           </div>
        )
    }
}