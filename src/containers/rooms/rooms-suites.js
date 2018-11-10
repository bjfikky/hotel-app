import React, {Component} from 'react';
import {connect} from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {getRooms} from "../../actions/actions_rooms";



class SuiteRooms extends Component {
    componentWillMount() {
        this.props.getRooms()
    }

    //TODO: Add ReservationSearchForm Dates

    id = 0;

    createData = (roomName, status, reservation) => {
        let id = this.id += 1;
        return { id, roomName, status, reservation};
    }

    data = [
        this.createData('101 Suite', 'empty', 26),
        this.createData('103 Suite', 'empty', 8),
        this.createData('105 Suite', 'Benjamin Orimoloye', 11),
        this.createData('107 Suite', 'empty', 5),
        this.createData('109 Suite', 'James Manuel', 2),
    ];


    render() {
        let statusColor = '';

        return (
            <Paper style={{padding: '20px'}}>
                <h3>Suites</h3>

                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Room Name</TableCell>
                            <TableCell>Occupied</TableCell>
                            <TableCell>Reservation (next 30 days)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.rooms.map(n => {

                            if (n.type === 'suite') {

                                if (n.empty) {
                                    statusColor = 'red'
                                } else {
                                    statusColor = 'green'
                                }

                                return (
                                    <TableRow key={n.id}>
                                        <TableCell component="th" scope="row">
                                            <strong>{n.name}</strong>
                                        </TableCell>

                                        <TableCell style={{color: statusColor }}  >
                                            {n.guestName ? n.guestName  : 'empty'}
                                        </TableCell>

                                        <TableCell>{n.reservation}</TableCell>
                                    </TableRow>
                                );
                            }
                        })}
                    </TableBody>
                </Table>
            </Paper>

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
)(SuiteRooms);