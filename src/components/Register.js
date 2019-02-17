import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../App.css";
import posed from "react-pose";
import Validator from "validator";
import "./Register.scss";

// const formValid = ({ formErr, ...rest }) => {
//   let valid = true;
//   Object.values(formErr).forEach(val => {
//     val.length > 0 && (valid = false);
//   });

//   Object.values(rest).forEach(val => {
//     val.length === 0 && (valid = false);
//   });

//   return valid;
// };

// const Container = posed.div({
//   enter: { staggerChildren: 50 }
// });

// const P = posed.p({
//   enter: { x: 0, opacity: 1 },
//   exit: { x: 50, opacity: 0 }
// });

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    isCheck: false,
    errors: { firstName: "", lastName: "", phone: "", email: "" }
  };

  handleChange = e => {
    const { name } = e.target;
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state);
    console.log(errors);
    if (Object.keys(errors).length === 0) {
      console.log("submit ");
      this.setState({
        firstName: "",
        lastName: "",
        phone: "",
        username: "",
        password: "",
        email: "",
        confirmPassword: "",
        isCheck: false
      });
    } else {
      console.log("cannot submit");
    }
  };

  validate = value => {
    const err = {};
    if (!Validator.isEmail(value.email)) err.email = "invalid";
    if (!Validator.isAlpha(value.firstName)) err.firstName = "only text bro !!";
    if (!Validator.isAlpha(value.lastName)) err.lastName = "only text bro !!";
    if (!Validator.isNumeric(value.phone)) err.phone = "only number bro !!";
    if (Validator.isEmpty(value.username))
      err.username = "no empty this field bro !!";
    if (Validator.isEmpty(value.password))
      err.password = "no empty this field bro !!";

    if (Validator.isEmpty(value.confirmPassword))
      err.confirmPassword = "no empty this field bro !!";
    else if (value.confirmPassword !== value.password)
      err.confirmPassword = "Password mismatched";
    this.setState({ errors: err });
    return err;
  };

  render() {
    const {
      username,
      password,
      confirmPassword,
      firstName,
      lastName,
      phone,
      email,
      isCheck,
      errors
    } = this.state;

    return (
      <form onSubmit={this.onSubmit} className="container">
        <h1 className="display-4">Register</h1>
        <h4 className="text-capitalize display-5">
          please enter all information{" "}
        </h4>
        <div className="form-group-1">
          <div className="form-control-1 mr-2">
            {<span className="error">{errors.firstName}</span>}
            <TextField
              autoFocus
              error={errors.firstName ? true : false}
              name="firstName"
              label="First Name"
              value={firstName}
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className="form-control-1">
            {<div className="error">{errors.lastName}</div>}
            <TextField
              error={errors.lastName ? true : false}
              name="lastName"
              label="Last Name"
              value={lastName}
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
          </div>
        </div>
        <div className="form-group-1">
          <div className="form-control-1 mr-2">
            {<span className="error">{errors.phone}</span>}
            <TextField
              error={errors.phone ? true : false}
              name="phone"
              label="Phone Number"
              value={phone}
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className="form-control-1">
            {<span className="error">{errors.email}</span>}
            <TextField
              error={errors.email ? true : false}
              name="email"
              label="Email"
              value={email}
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
          </div>
        </div>
        <div className="form-group-1">
          <div className="form-control-1 mr-2">
            {<div className="error">{errors.username}</div>}
            <TextField
              error={errors.username ? true : false}
              name="username"
              label="Username"
              value={username}
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className="form-control-1 mr-2">
            {<div className="error">{errors.password}</div>}
            <TextField
              error={errors.password ? true : false}
              name="password"
              label="Password"
              value={password}
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
          </div>
        </div>
        <div className="form-control-1 mr-2">
          {<div className="error">{errors.confirmPassword}</div>}
          <TextField
            error={errors.confirmPassword ? true : false}
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            onChange={this.handleChange}
            onFocus={e => this.setState({ confirmPassword: "" })}
            margin="normal"
            variant="outlined"
          />
        </div>
        <br />
        {/* {<div className="error">{this.state.formErr.isCheckErr}</div>} */}
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={isCheck}
            name="isCheck"
            onChange={this.handleChange}
          />
          <label className="form-check-label">Term & Conditions</label>
        </div>
        <div className="row justify-content-center mt-3">
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            // disabled={isDisable}
          >
            Register
          </Button>
          <br />
          <Link to="/" className="btn btn-primary text-capitalize ml-2">
            you have account!!
          </Link>
        </div>
      </form>
    );
  }
}

export default Register;
