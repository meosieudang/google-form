import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Register from "./components/Register";
import PasswordForm from "./components/PasswordForm";
import UserForm from "./components/UserForm";
import Success from "./components/Success";
import posed, { PoseGroup } from "react-pose";
import Validator from "validator";
import Dashboard from "./components/Dashboard";

const RouteContainer = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    delay: 100,
    transition: {
      y: { type: "spring", stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    x: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});

class App extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onKeyUp = e => {
    if (e.keyCode === 13) {
      this.nextStep();
    }
  };

  onSubmit = e => {
    e.preventDefault();
    // let err = this.validate(this.state);
    // console.log(err);
    // if (Object.keys(err).length === 0) {
    //   // this.setState({
    //   //   username: "",
    //   //   password: "",
    //   //   usernameError: "",
    //   //   passwordError: ""
    //   // });
    //   console.log("vailid");
    // } else {
    //   console.log("invalid");
    // }
  };

  render() {
    const { username, password } = this.state;
    return (
      <Router>
        <>
          <Route
            render={({ location }) => (
              <div id="site-container">
                <div id="content-container">
                  {/* <ul id="site-nav">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </ul> */}
                  {/* <div className="container"> */}
                  <PoseGroup>
                    <RouteContainer key={location.pathname}>
                      <Switch location={location}>
                        <Route
                          exact
                          path="/"
                          component={({ history }) => (
                            <UserForm
                              handleChange={this.handleChange}
                              username={username}
                              history={history}
                            />
                          )}
                        />
                        <Route
                          path="/v2"
                          component={({ history }) => (
                            <PasswordForm
                              handleChange={this.handleChange}
                              username={username}
                              password={password}
                              history={history}
                            />
                          )}
                        />
                        <Route path="/register" component={Register} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route
                          path="/success"
                          component={({ history }) => (
                            <Success history={history} />
                          )}
                        />
                      </Switch>
                    </RouteContainer>
                  </PoseGroup>
                </div>
              </div>
              // </div>
            )}
          />
        </>
      </Router>
    );
  }
}

export default App;
// checkBlank = (input, flag) => {
//   let check = true;
//   let usernameError = "";
//   let passwordError = "";
//   if (input === "") {
//     check = false;
//   }
//   if (flag) {
//     usernameError = "Hãy nhập email hoặc số điện thoại";
//   } else {
//     passwordError = "Hãy nhập password";
//   }

//   this.setState({
//     usernameError: usernameError,
//     passwordError: passwordError
//   });
//   return check;
// };

// validate = () => {
//   let isValid = true;
//   let { username, password } = this.state;
//   let error = {
//     usernameError: "",
//     passwordError: ""
//   };
//   error.usernameError = this.checkBlank(username)
//     ? ""
//     : "Hãy nhập email hoặc số điện thoại";
//   error.passwordError = this.checkBlank(password)
//     ? ""
//     : "cannot be empty password";

//   if (!this.checkBlank(username)) {
//     isValid = false;
//   }

//   if (!this.checkBlank(password)) {
//     isValid = false;
//   }

//   this.setState({
//     ...this.state,
//     ...error
//   });

//   return isValid;
// };
