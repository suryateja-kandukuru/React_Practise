import React, { Component } from 'react'

export default class ChildComp extends Component {
    render() {
        return (
            <div>
                The item name is { this.props.item }
            </div>
        )
    }
}
