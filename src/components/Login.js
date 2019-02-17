import React, { Component, Fragment } from 'react';
// import UserForm from './UserForm';
// import PasswordForm from './PasswordForm';
// import Success from './Success';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Register from './Register';

class Login extends Component {
    state = {
        step: 1,
        username: '',
        password: '',
        usernameError: '',
        passwordError: ''
    }

    nextStep = () => {
        this.setState({
            step: this.state.step + 1
        })
    }

    prevStep = () => {
        this.setState({
            step: this.state.step - 1,
            usernameError: ''
        })
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    onKeyUp = e => {
        if (e.keyCode === 13) {
            this.nextStep();
        }
    }

    checkBlank = (input, flag) => {
        let check = true;
        let usernameError = '';
        let passwordError = '';
        if (input === '') {
            check = false;
        }
        if (flag) {
            usernameError = 'Hãy nhập email hoặc số điện thoại';
        } else {
            passwordError = 'Hãy nhập password';
        }

        this.setState({
            usernameError: usernameError,
            passwordError: passwordError
        })
        return check;
    }

    validate = () => {
        let isValid = true;
        let { username, password } = this.state;
        let error = {
            usernameError: '',
            passwordError: ''
        }
        error.usernameError = this.checkBlank(username) ? '' : 'Hãy nhập email hoặc số điện thoại'
        error.passwordError = this.checkBlank(password) ? '' : 'cannot be empty password';

        if (!this.checkBlank(username)) {
            isValid = false;
        }

        if (!this.checkBlank(password)) {
            isValid = false;
        }

        this.setState({
            ...this.state,
            ...error
        })

        return isValid;
    }

    onSubmit = e => {
        let err = this.validate();
        if (err) {
            this.setState({
                step: 1,
                username: '',
                password: '',
                usernameError: '',
                passwordError: ''
            });
            console.log('vailid')
        } else {
            console.log('invalid')
        }
    }

    render() {
        // const { username, password, step, usernameError, passwordError } = this.state;
        // switch (step) {
        //     case 1:
        //         return <UserForm
        //             handleChange={this.handleChange}
        //             username={username}
        //             usernameError={usernameError}
        //             nextStep={this.nextStep}
        //             checkBlank={this.checkBlank}
        //             history={this.props.history}
        //         />
        //     case 2:
        //         return <PasswordForm
        //             handleChange={this.handleChange}
        //             username={username}
        //             password={password}
        //             passwordError={passwordError}
        //             prevStep={this.prevStep}
        //             nextStep={this.nextStep}
        //             onSubmit={this.onSubmit}
        //             handleKeyUp={this.onKeyUp}
        //             checkBlank={this.checkBlank}
        //         />
        //     case 3:
        //         return <Success />
        //     default:
        //         break;
        // }
        return (
           <Fragment></Fragment>
        )
    }
}
export default Login;