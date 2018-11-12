import React, {Component} from 'react';
import {connect} from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import {getReservations} from "../../actions/actions_reservations";


class GuestsArchive extends Component {
    componentWillMount () {
        this.props.getReservations()
    }

    //TODO: Add search bar to old guest list table


    render() {
        return (
            <Paper style={{padding: '20px'}}>
                <h3>Guests Archive</h3>

                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Guest Name</TableCell>
                            <TableCell>Room Name</TableCell>
                            <TableCell>Check-in</TableCell>
                            <TableCell>Check-out</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.reservations.map(n => {
                                if (n.status === 'CHECKED OUT') {
                                    return (
                                        <TableRow key={n.id}>
                                            <TableCell component="th" scope="row">
                                                <strong>{n.guestName}</strong>
                                            </TableCell>

                                            <TableCell>{n.roomName}</TableCell>

                                            <TableCell>{n.checkin}</TableCell>

                                            <TableCell>{n.checkout}</TableCell>
                                        </TableRow>
                                    );
                                }

                            })
                        }
                    </TableBody>
                </Table>
            </Paper>

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
)(GuestsArchive);