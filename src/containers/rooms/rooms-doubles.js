import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getRooms} from "../../actions/actions_rooms";

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



class DoubleRooms extends Component {
    componentWillMount() {
        this.props.getRooms()
    }

    render() {
        let statusColor = '';

        return (
            <Paper style={{padding: '20px'}}>
                <h3>Double Rooms</h3>

                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Room Name</TableCell>
                            <TableCell>Occupied</TableCell>
                            <TableCell>Reservation (next 30 days)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.rooms.map(n => {

//CHECK IF THE ROOM TYPE IS DOUBLE
                                if (n.type === 'double') {
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

                                            <TableCell style={{color: statusColor }}  >{n.guestName ? n.guestName  : 'empty'}</TableCell>

                                            <TableCell>{n.reservation}</TableCell>
                                        </TableRow>
                                    )
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
        rooms: state.rooms
    };
}

export default connect(
    mapStateToProps,
    {getRooms}
)(DoubleRooms);