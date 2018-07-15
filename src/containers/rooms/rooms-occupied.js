import React, {Component} from 'react';
import {connect} from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



class OccupiedRooms extends Component {

    id = 0;

    createData = (roomName, guestName, numOccupants, checkout) => {
        let id = this.id += 1;
        return { id, roomName, guestName, numOccupants, checkout};
    }

    data = [
        this.createData('101 Single', 'Benjamin Orimoloye', 2, '05/08/2018'),
        this.createData('101 Single', 'John Kirk', 1, '05/13/2018'),
        this.createData('101 Single', 'Billy Smith', 2, '06/01/2018'),
        this.createData('101 Single', 'Tom Vaccetti', 3, '05/12/2018'),
        this.createData('101 Single', 'Gerard Baltimore', 2, '05/21/2018'),
    ];


    render() {
        return (
            <Paper style={{padding: '20px'}}>
                <h3>Occupied Rooms</h3>

                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Room Name</TableCell>
                            <TableCell>Guest Name</TableCell>
                            <TableCell>No. of Occupants</TableCell>
                            <TableCell>Checkout Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.data.map(n => {


                            return (
                                <TableRow key={n.id}>
                                    <TableCell component="th" scope="row">
                                        <strong>{n.roomName}</strong>
                                    </TableCell>

                                    <TableCell>{n.guestName}</TableCell>

                                    <TableCell>{n.numOccupants}</TableCell>

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
)(OccupiedRooms);