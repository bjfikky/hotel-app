import React, {Component} from 'react';
import {connect} from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



class SingleRooms extends Component {

    render() {
        let statusColor = '';
        
        return (
                <Paper style={{padding: '20px'}}>
                    <h3>Single Rooms</h3>
                    
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

//CHECK IF THE ROOM TYPE IS SINGLE
                                    if (n.type === 'single') {
                                        if (n.empty) {
                                            statusColor = 'green'
                                        } else {
                                            statusColor = 'red'
                                        }

                                        return (
                                            <TableRow key={n.id}>
                                                <TableCell component="th" scope="row">
                                                    <strong>{n.name}</strong>
                                                </TableCell>

                                                <TableCell style={{color: statusColor }}  >{n.empty ? 'empty' : 'occupied'}</TableCell>

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
)(SingleRooms);