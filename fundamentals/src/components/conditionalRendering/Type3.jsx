import React, { Component } from 'react'

export default class type3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
        let ele = this.state.isLoggedIn ? <div>User is loggedin</div> : <div> User not logged in</div>
        return (
            <div>
                { ele }
            </div>
        )
    }
}
