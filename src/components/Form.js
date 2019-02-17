import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core'

const formValid = ({ formErr, ...rest }) => {
    let valid = true;
    Object.values(formErr).forEach(val => {
        val.length > 0 && (valid = false);
    })

    Object.values(rest).forEach(val => {
        val.length === 0 && (valid = false);
    })

    return valid;
};

class Form extends Component {
    state = {
        name: '',
        password: '',
        formErr: {
            nameErr: '',
            passwordErr: ''
        },
        isDisable: true
    }

    handleChange = e => {
        let { name } = e.target;
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        let formErr = this.state.formErr;

        switch (name) {
            case 'name':
                formErr.nameErr =
                    value.length < 3 && value.length > 0 ? 'minium 3 character required' : ''
                    || value.length === 0 ? 'required' : '';
                break;

            case 'password':
                formErr.passwordErr =
                    value.length < 3 && value.length > 0 ? 'minium 3 character required' : ''
                    || value.length === 0 ? 'required' : '';
                break;

            default:
                break;
        }
        if (formValid(this.state)) {
            console.log('a')
            this.setState({
                isDisable: false
            })
        } else {
            console.log('b')
            this.setState({
                isDisable: true
            })
        }
        this.setState({
            formErr: formErr,
            [name]: value
        })
        console.log(this.state)
    }

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        const { name, password, formErr, isDisable } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <TextField
                    error={formErr.nameErr ? true : false}
                    name='name'
                    label="Name"
                    value={name}
                    onChange={this.handleChange}
                    margin="normal"
                />
                {formErr.nameErr.length > 0 &&
                    (<div>{formErr.nameErr}</div>)}
                <br />
                <TextField
                    error={formErr.passwordErr ? true : false}
                    name='password'
                    label="Password"
                    value={password}
                    onChange={this.handleChange}
                    margin="normal"
                    type='password'
                />
                 {formErr.passwordErr.length > 0 &&
                    (<div>{formErr.passwordErr}</div>)}
                <br />
                <Button variant="outlined" color="secondary"
                    type='submit' disabled={isDisable}>
                    Login
                </Button>
            </form>
        );
    }
}

export default Form;