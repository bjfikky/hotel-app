import React, {Component} from 'react';
import {connect} from 'react-redux';

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login Page</h1>
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
