import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {connect} from 'react-redux';


const formStyle = {
   textAlign: 'center',
    marginTop: '20%'
}

const formElement = {
    display: 'block',
    padding: '15px 0px'
}

class Login extends Component {
    render() {
        return (
            //TODO: Build the login page with Material-UI
            <div  style={formStyle}>
                <h1>Hotel App</h1>
                <div style={formElement}>
                    <TextField
                        label="Username"
                        placeholder="jondoe@email.com"
                        margin="normal"
                    />
                </div>
                
                <div style={formElement}>
                    <TextField
                        label="Password"
                        placeholder="enter password"
                        type="password"
                    />
                </div>

                <div style={formElement}>
                    <Button variant="contained" color="primary">Login</Button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(Login);
