import React, {Component} from 'react';
import {connect} from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {getReservations} from "../../actions/actions_reservations";

class Guests extends Component {
    componentWillMount() {
        this.props.getReservations()
    }

    getUncheckedReservations = () => {
        let count = 0
        this.props.reservations.forEach(reservation => {
            if (!reservation.status)
                count++
        })

        return count
    }

    getCheckedInGuest = () => {
        let count = 0
        this.props.reservations.forEach(reservation => {
            if (reservation.status === 'CHECKED IN')
                count++
        })

        return count
    }
    
    render() {
        return (
            <Grid item md={4} xs={12}>
                <Paper style={this.props.style.paper}>
                    <h3 style={this.props.style.paperTitle}>Guests Snapshot</h3>
    
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell numeric>Number</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Checked in guests
                                </TableCell>
                                <TableCell style={{color: 'green'}} numeric>{this.getCheckedInGuest()}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Checking out today
                                </TableCell>
                                <TableCell style={{color: 'green'}} numeric>-</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Reservations
                                </TableCell>
                                <TableCell style={{color: 'green'}} numeric>{this.getUncheckedReservations()}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Guests this month
                                </TableCell>
                                <TableCell style={{color: 'green'}} numeric>-</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Guests last month (October)
                                </TableCell>
                                <TableCell style={{color: 'green'}} numeric>-</TableCell>
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
        reservations: state.reservations
    };
}

export default connect(
    mapStateToProps,
    {getReservations}
)(Guests);
