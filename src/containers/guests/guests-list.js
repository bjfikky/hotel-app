
import React, {Component} from 'react';
import {connect} from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



class GuestsList extends Component {

    //TODO: Add search bar to guest list table

    id = 0;

    createData = (guestName, roomName, checkin, checkout) => {
        let id = this.id += 1;
        return { id, guestName, roomName, checkin, checkout};
    }

    data = [
        this.createData('Benjamin Orimoloye', '104 Suite', '09/12/2018', '09/16/2018'),
        this.createData('Benjamin Orimoloye', '104 Suite', '09/12/2018', '09/16/2018'),
        this.createData('Benjamin Orimoloye', '104 Suite', '09/12/2018', '09/16/2018'),
        this.createData('Benjamin Orimoloye', '104 Suite', '09/12/2018', '09/16/2018'),
        this.createData('Benjamin Orimoloye', '104 Suite', '09/12/2018', '09/16/2018'),
        this.createData('Benjamin Orimoloye', '104 Suite', '09/12/2018', '09/16/2018'),
        this.createData('Benjamin Orimoloye', '104 Suite', '09/12/2018', '09/16/2018'),
        this.createData('Benjamin Orimoloye', '104 Suite', '09/12/2018', '09/16/2018'),
        this.createData('Benjamin Orimoloye', '104 Suite', '09/12/2018', '09/16/2018'),
        this.createData('Benjamin Orimoloye', '104 Suite', '09/12/2018', '09/16/2018'),
        this.createData('Benjamin Orimoloye', '104 Suite', '09/12/2018', '09/16/2018'),
        this.createData('Benjamin Orimoloye', '104 Suite', '09/12/2018', '09/16/2018'),
        this.createData('Benjamin Orimoloye', '104 Suite', '09/12/2018', '09/16/2018'),
        this.createData('Benjamin Orimoloye', '104 Suite', '09/12/2018', '09/16/2018'),
    ];


    render() {
        return (
            <Paper style={{padding: '20px'}}>
                <h3>Current Guests</h3>

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
)(GuestsList);