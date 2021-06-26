import React, { Component } from "react";

export default class SimpleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      address: "",
      gender: "Male",
    };
  }

  updateUserName = (event) => {
    this.setState(() => ({
      username: event.target.value,
    }));
  };

  updateGender = (event) => {
    this.setState(() => ({
      gender: event.target.value,
    }));
  };

  updateAddress = (event) => {
    this.setState(() => ({
      address: event.target.value,
    }));
  };

  formSubmit = (event) => {
    alert(`${this.state.username} ${this.state.address} ${this.state.gender}`);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <label>UserName:</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.updateUserName}
          />
          <br />
          <br />
          <label>Address:</label>
          <textarea
            value={this.state.address}
            onChange={this.updateAddress}
          ></textarea>
          <br />
          <br />
          <label>Gender</label>
          <select value={this.state.gender} onChange={this.updateGender}>
            <option value="Male" name="Male">
              Male
            </option>
            <option value="Female" name="Female">
              Female
            </option>
            <option value="Transgender" name="Transgender">
              Transgender
            </option>
          </select>
          <br />
          <br />
          <button type="submit">Save Form</button>
        </form>
      </div>
    );
  }
}
