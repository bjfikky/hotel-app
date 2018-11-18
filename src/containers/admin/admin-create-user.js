import React, {Component} from 'react';
import {connect} from "react-redux";


import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


import {createUser} from "../../actions/actions_admin";


class CreateUser extends Component {
    state = {
        email: '',
        password: '',

    }

    render() {
        return (
            <Paper style={{padding: '20px'}}>
                <h3>Add User</h3>

                <form action="" onSubmit={this.handleAddUser}>
                    <div style={{marginBottom:30, display: 'flex'}}>
                        <TextField label="Email" required={true} style={{ flexGrow: 1, paddingRight: '40px' }} name="email" onChange={this.handleInputChange}/>
                        <TextField label="Password" type="password" required={true} style={{ flexGrow: 1, paddingRight: '20px'  }} name="password" onChange={this.handleInputChange}/>
                    </div>

                    <div>

                        <Button type="submit" variant="contained" color="primary">
                            Create User
                        </Button>

                    </div>
                </form>
            </Paper>

        );
    }



    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleAddUser = (event) => {
        event.preventDefault()

        if (this.state.password.length < 7) {
            alert("Password must be more than 7 characters")
            return
        }

        if (this.state.email === '' || this.state.password === '') {
            alert("Email and Password fields cannot be empty")
            return
        }

        if (! validateEmail(this.state.email)) {
            alert("Invalid email format")
            return
        }

        this.props.createUser(this.state.email, this.state.password)
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function mapStateToProps(state) {
    return {
        admin: state.admin
    };
}

export default connect(
    mapStateToProps,
    {createUser}
)(CreateUser);
