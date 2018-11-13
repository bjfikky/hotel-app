import React, {Component} from 'react';
import {connect} from 'react-redux';

import {login} from "../actions/actions_auth";


import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const formStyle = {
   textAlign: 'center',
    marginTop: '20%'
}

const formElement = {
    display: 'block',
    padding: '15px 0px'
}


class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }

    render() {
        console.log(this.props.auth)
        return (
            <form onSubmit={this.handleLogin}>
                <div  style={formStyle}>
                    <h1>Hotel App</h1>
                    <div style={formElement}>
                        <TextField
                            onChange={this.handleInputChange}
                            label="Email"
                            name="email"
                            placeholder="jondoe@email.com"
                            margin="normal"
                        />
                    </div>

                    <div style={formElement}>
                        <TextField
                            onChange={this.handleInputChange}
                            label="Password"
                            name="password"
                            placeholder="enter password"
                            type="password"
                        />
                    </div>

                    <div style={formElement}>
                        <Button type="submit" variant="contained" color="primary">Login</Button>
                    </div>
                </div>
            </form>
        );
    }


    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleLogin = (event) => {
        event.preventDefault()
        console.log(this.state.email)
        this.props.login(this.state.email, this.state.password, () => {
            this.props.history.push({
                pathname: '/',
            })
        })
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(
    mapStateToProps,
    {login}
)(Login);
