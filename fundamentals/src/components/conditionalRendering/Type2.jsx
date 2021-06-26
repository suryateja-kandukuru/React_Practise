import React, { Component } from 'react'

export default class Type2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    render() {
        let message
        if(this.state.isLoggedIn) {
            message = <div>User logged In</div>
        } else {
            message = <div>Not logged in</div>
        }
        return (
            <div>
                { message }
            </div>
        )
    }
}
