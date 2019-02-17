import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export class Success extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/dashboard");
    }, 1000);
  }
  render() {
    return (
      <div className="text-center">
        <h1>Login Success</h1>
      </div>
    );
  }
}

export default Success;
