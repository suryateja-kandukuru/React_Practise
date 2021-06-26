// Stateful class component
import { Component } from "react";

class Greeting extends Component {
    render() {
        return <h1>Good Night to You { this.props.name }</h1>
    }
}

export default Greeting