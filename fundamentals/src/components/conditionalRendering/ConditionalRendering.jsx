import React, { Component } from 'react'
import Type1 from './Type1'
import Type2 from './Type2'
import Type3 from './Type3'
import Type4 from './Type4'

export default class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true,
             name: 'surya'
        }
    }
    
    render() {
        return (
            <div>
                <Type1 />
                <Type2 />
                <Type3 />
                <Type4 />
                <br />
                <br />
                <br />
            <div>
                { this.state.isLoggedIn ? <p>Welcome to the new User </p> : <p>Not Loggined</p> }
            </div>
            <div>
                { this.state.isLoggedIn && <p>Welcome to the new User </p> }
            </div>
            <div>
                <p>Is user loggined in { this.state.isLoggedIn && <span>is { this.state.name }</span> }</p>
            </div>
            </div>
        )
    }
}
