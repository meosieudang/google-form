import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import Validator from "validator";
import Info from "@material-ui/icons/Info";
// import posed from "react-pose";

// const ListContainer = posed.ul({
//   enter: { staggerChildren: 50 },
//   exit: { staggerChildren: 20, staggerDirection: -1 }
// });

// const Item = posed.li({
//   enter: { y: 0, opacity: 1 },
//   exit: { y: 50, opacity: 0 }
// });

class UserForm extends Component {
  state = {
    usernameError: ""
  };

  onSubmit = e => {
    e.preventDefault();
    let usernameError;
    if (Validator.isEmpty(this.props.username)) {
      usernameError = "Hãy nhập email hoặc số điện thoại";
    } else {
      this.props.history.push("/v2");
    }
    this.setState({ usernameError: usernameError });
  };

  render() {
    const { username, handleChange } = this.props;
    const { usernameError } = this.state;
    return (
      <form className="container" onSubmit={this.onSubmit}>
        <img
          className="google-img"
          src={
            "https://www.festisite.com/static/partylogo/img/logos/google.png"
          }
          alt=""
        />
        <h1 className="lead text-login">Đăng nhập</h1>
        <p>Sử dụng Tài khoản Google của bạn</p>

        <TextField
          style={style.input}
          autoFocus
          error={!username && usernameError ? true : false}
          name="username"
          label="Email hoặc điện thoại"
          value={username}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        {
          <div className="text-danger text-left ml-3 text-error row ">
            {!username && usernameError ? <Info /> : ""}
            {username ? "" : usernameError}
          </div>
        }
        <div className="text-more">
          <p className="mb-5">
            <b>Bạn quên địa chỉ email?</b>
          </p>
          <p>
            Không phải máy tính của bạn? Hãy sử dụng chế độ Khách để đăng nhập
            một cách riêng tư. <b>Tìm hiểu thêm</b>
          </p>
        </div>
        <br />
        <div className="row justify-content-between align-items-center px-5 pb-5">
          <Link to="/register" className="btn btn-outline-danger">
            Tạo tài khoản
          </Link>
          <button className="btn btn-primary" type="submit">
            Tiếp theo
          </button>
        </div>
        {/* </div> */}
      </form>
    );
  }
}

const style = {
  input: {
    width: "90%"
  }
};
export default UserForm;
