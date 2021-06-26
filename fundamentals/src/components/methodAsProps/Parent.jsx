import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {


    greetParent(child) {
        alert('Hello Parent from ' + child )
    }
    
    render() {
        return (
            <div>
                <p>This is parent Component</p>
                <Child handler={ this.greetParent } />
            </div>
        )
    }
}
