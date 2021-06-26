import React, { Component } from 'react'
export default class Message extends Component {

    constructor() {
        super()
        this.state = {
            msg: 'Click below button to Subscribe'
        }
    }

    messageChange() {
       this.setState(() => {
           return {
               msg : 'Subscribed'
       }})
    }

    render() {
        return (
            <div>
            <p>{ this.state.msg }</p>
            <button onClick={() => this.messageChange() }>Subscribe</button>
        </div>
        )
    }
}