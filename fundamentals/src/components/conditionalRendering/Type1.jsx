import React, { Component } from 'react'

export default class Type1 extends Component {
    render() {
        let isLoggedIn = true
        if(isLoggedIn) {
            return (
                <div>
                    User logged In! Welcome
                </div>
            )
        } 
        else {
            return (
                <div>
                   User not loggedIn
                </div>
            )
        }
    }
}
