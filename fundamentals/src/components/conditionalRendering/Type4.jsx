import React, { Component } from 'react'

export default class Type4 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {
    let element = this.state.isLoggedIn && <div> user is Logged in</div>
        return (
            <div>
                { element }
            </div>
        )
    }
}
