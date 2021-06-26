import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <p>This is child Component</p>
                <button onClick={ () => (this.props.handler('children')) }>Greet Parent</button>
            </div>
        )
    }
}
