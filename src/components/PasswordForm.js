import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
// import '../App.css'
import Info from "@material-ui/icons/Info";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Validator from "validator";

class PasswordForm extends Component {
  state = {
    showPassword: false,
    passwordError: ""
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  onSubmit = e => {
    e.preventDefault();
    let passwordError;
    if (!Validator.isEmpty(this.props.password)) {
      this.props.history.push("/success");
    } else {
      passwordError = "Hãy nhập password";
    }
    this.setState({ passwordError: passwordError });
  };

  render() {
    const { username, password, handleChange } = this.props;
    const { passwordError } = this.state;
    return (
      <form className="container" onSubmit={this.onSubmit}>
        <img
          className="google-img"
          src={
            "https://www.festisite.com/static/partylogo/img/logos/google.png"
          }
          alt=""
        />
        <h1 className="lead text-login">Chào mừng</h1>
        <p>{username}</p>
        <TextField
          autoFocus
          error={!password && passwordError ? true : false}
          style={style.input}
          variant="outlined"
          type={this.state.showPassword ? "text" : "password"}
          label="Nhập mật khẩu của bạn"
          name="password"
          value={password}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  className="outline"
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {!this.state.showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        {
          <div className="text-danger text-left ml-3 text-error row mt-2">
            {!password && passwordError ? <Info /> : ""}
            {password ? "" : passwordError}
          </div>
        }

        <br />
        <div className="row justify-content-between px-3 pb-5">
          <Button color="primary">Quên mật khẩu?</Button>
          <div>
            <Button variant="outlined" color="primary" type="submit">
              Đăng nhập
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

const style = {
  input: {
    width: "90%"
  }
};

export default PasswordForm;
