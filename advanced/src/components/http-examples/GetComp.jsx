import React, { Component } from "react";
import axios from "axios";
export default class GetComp extends Component {
  // Http library go with axios
  // Make all api calls in componentDidMount()
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        this.setState(() => ({
          posts: res.data,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { posts } = this.state;
    return (
      <div>
        {posts.map((x) => (
          <p key={x.id}>
            The user id is {x.id} and title is {x.title}
          </p>
        ))}
      </div>
    );
  }
}
