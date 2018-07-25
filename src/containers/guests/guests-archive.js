//TODO: Add the table for old guests


import React, {Component} from 'react';
import {connect} from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



class GuestsArchive extends Component {

    //TODO: Add search bar to old guest list table

    id = 0;

    createData = (guestName, roomName, checkin, checkout) => {
        let id = this.id += 1;
        return { id, guestName, roomName, checkin, checkout};
    }

    data = [
        this.createData('James Franklyn', '103 Double', '05/12/2015', '09/19/2015'),
        this.createData('James Franklyn', '103 Double', '05/12/2015', '09/19/2015'),
        this.createData('James Franklyn', '103 Double', '05/12/2015', '09/19/2015'),
        this.createData('James Franklyn', '103 Double', '05/12/2015', '09/19/2015'),
        this.createData('James Franklyn', '103 Double', '05/12/2015', '09/19/2015'),
        this.createData('James Franklyn', '103 Double', '05/12/2015', '09/19/2015'),
        this.createData('James Franklyn', '103 Double', '05/12/2015', '09/19/2015'),
        this.createData('James Franklyn', '103 Double', '05/12/2015', '09/19/2015'),
        this.createData('James Franklyn', '103 Double', '05/12/2015', '09/19/2015'),
        this.createData('James Franklyn', '103 Double', '05/12/2015', '09/19/2015'),
        this.createData('James Franklyn', '103 Double', '05/12/2015', '09/19/2015'),
        this.createData('James Franklyn', '103 Double', '05/12/2015', '09/19/2015'),
        this.createData('James Franklyn', '103 Double', '05/12/2015', '09/19/2015'),
        this.createData('James Franklyn', '103 Double', '05/12/2015', '09/19/2015'),
    ];


    render() {
        let statusColor = '';

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
                        {this.data.map(n => {

                            if (n.status === 'empty') {
                                statusColor = 'green'
                            } else {
                                statusColor = 'red'
                            }

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
                        })}
                    </TableBody>
                </Table>
            </Paper>

        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(GuestsArchive);