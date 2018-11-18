import React, {Component} from 'react';
import {connect} from "react-redux";

import Paper from "@material-ui/core/Paper";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Delete from '@material-ui/icons/DeleteForever'

import firebase from 'firebase'

import CreateUser from './admin-create-user'


import {getReservations} from "../../actions/actions_reservations";

import Grid from "@material-ui/core/es/Grid/Grid";

class AllUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        let userCopy = []
        let users = firebase.firestore().collection("users").get()



        users.then(data => {
            data.forEach(user => {
                if (user.data().email !== 'admin@hotelapp.com') {
                    userCopy.push({
                        email: user.data().email,
                        id: user.id,
                        password: user.data().password,
                        createdAt: user.data().createdAt
                    })
                }

            })

            this.setState({users: userCopy})
        })


    }

    render() {
        console.log(this.state)
        return (

            <div>
                <h3>Admin Panel</h3>

                <Grid container>
                    <Grid item md={4} style={{padding: '10px'}}>


                        <CreateUser/>

                    </Grid>

                    <Grid item md={8} style={{padding: '10px'}}>
                        <Paper style={{padding: '20px'}}>
                            <h3>Users List</h3>
                            <Table >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>User ID</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Password</TableCell>
                                        <TableCell>Delete</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.users.map(n => {

                                            return (
                                                <TableRow key={n.id}>
                                                    <TableCell component="th" scope="row">
                                                        <strong>{n.id}</strong>
                                                    </TableCell>

                                                    <TableCell>{n.email}</TableCell>

                                                    <TableCell>{n.password}</TableCell>


                                                    <TableCell onClick={() => this.deleteUser(n.id)} className="bin"><Delete /></TableCell>



                                                </TableRow>
                                            )



                                    })}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>

                </Grid>
            </div>


        );
    }

    deleteUser = (id) => {
        firebase.firestore().collection("users").doc(id).delete().then(() => {

            let userCopy = []
            let users = firebase.firestore().collection("users").get()



            users.then(data => {
                data.forEach(user => {
                    if (user.data().email !== 'admin@hotelapp.com') {
                        userCopy.push({
                            email: user.data().email,
                            id: user.id,
                            password: user.data().password,
                            createdAt: user.data().createdAt
                        })
                    }

                })

                this.setState({users: userCopy})
            })

        })
    }
}

function mapStateToProps(state) {
    return {
        reservations: state.reservations
    };
}

export default connect(
    mapStateToProps,
    {getReservations}
)(AllUser);
