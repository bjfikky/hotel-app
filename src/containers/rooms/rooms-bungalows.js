import React, {Component} from 'react';
import {connect} from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {getRooms} from "../../actions/actions_rooms";


class BungalowRooms extends Component {
    componentWillMount() {
        this.props.getRooms()
    }


    render() {
        let statusColor = '';

        return (
            <Paper style={{padding: '20px'}}>
                <h3>Bungalows</h3>

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

                            if (n.type === 'bungalow') {

                                if (n.status === 'empty') {
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
                                );
                            }

                            return ''
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
)(BungalowRooms);