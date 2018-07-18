//TODO: Create empty rooms table here

import React, {Component} from 'react';
import {connect} from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



class EmptyRooms extends Component {

    id = 0;

    createData = (roomName, reservation) => {
        let id = this.id += 1;
        return { id, roomName, reservation};
    }

    data = [
        this.createData('101 Single', '05/08/2018'),
        this.createData('101 Single', '05/13/2018'),
        this.createData('101 Single', '06/01/2018'),
        this.createData('101 Single', '05/12/2018'),
        this.createData('101 Single', '05/21/2018'),
    ];


    render() {
        return (
            <Paper style={{padding: '20px'}}>
                <h3>Empty Rooms</h3>

                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Room Name</TableCell>
                            <TableCell>Reservations (next 30 days)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.data.map(n => {


                            return (
                                <TableRow key={n.id}>
                                    <TableCell component="th" scope="row">
                                        <strong>{n.roomName}</strong>
                                    </TableCell>

                                    <TableCell>{n.reservation}</TableCell>
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
)(EmptyRooms);