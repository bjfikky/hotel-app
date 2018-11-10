import React, {Component} from 'react';
import {connect} from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {getRooms} from "../../actions/actions_rooms";


class Rooms extends Component {
    componentWillMount() {
        this.props.getRooms()

    }

    getOccupiedRooms = (type) => {
        let allRooms = this.props.rooms

        let numOfEmpty = 0

        if (type) {
            for (let i = 0; i < allRooms.length; i++) {
                if (allRooms[i].type == type) {
                    if (allRooms[i].guestName) {
                        numOfEmpty++
                    }
                }
            }
            return numOfEmpty
        }

        for (let i = 0; i < allRooms.length; i++) {
            if (allRooms[i].guestName) {
                numOfEmpty++
            }
        }

        return numOfEmpty
    }

    getNumberOfRooms = (type) => {
        let allRooms = this.props.rooms

        let numOfType = 0

        for (let i = 0; i < allRooms.length; i++) {
            if (allRooms[i].type == type) {
                numOfType++
            }
        }
        return numOfType
    }

    render() {
        return (
            <Grid item md={4} xs={12}>
                <Paper style={this.props.style.paper}>
                    <h3 style={this.props.style.paperTitle}>Rooms</h3>
    
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell numeric>Occupied</TableCell>
                                <TableCell numeric>Empty</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow>
                                <TableCell component="th" scope="row">
                                    All Rooms
                                </TableCell>
                                <TableCell style={{color: 'red'}} numeric>{this.getOccupiedRooms()}</TableCell>
                                <TableCell style={{color: 'green'}} numeric>{this.props.rooms.length - this.getOccupiedRooms()}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Singles
                                </TableCell>
                                <TableCell style={{color: 'red'}} numeric>{this.getOccupiedRooms("single")}</TableCell>
                                <TableCell style={{color: 'green'}} numeric>{this.getNumberOfRooms("single")}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Doubles
                                </TableCell>
                                <TableCell style={{color: 'red'}} numeric>{this.getOccupiedRooms("double")}</TableCell>
                                <TableCell style={{color: 'green'}} numeric>{this.getNumberOfRooms("double")}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Suites
                                </TableCell>
                                <TableCell style={{color: 'red'}} numeric>{this.getOccupiedRooms("suite")}</TableCell>
                                <TableCell style={{color: 'green'}} numeric>{this.getNumberOfRooms("suite")}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Bungalows
                                </TableCell>
                                <TableCell style={{color: 'red'}} numeric>{this.getOccupiedRooms("bungalow")}</TableCell>
                                <TableCell style={{color: 'green'}} numeric>{this.getNumberOfRooms("bungalow")}</TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        rooms: state.rooms
    };
}

export default connect(
    mapStateToProps,
    {getRooms}
)(Rooms);
