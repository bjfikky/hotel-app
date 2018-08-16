import React, {Component} from 'react';
import {connect} from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



class SingleRooms extends Component {
    
    //TODO: Add ReservationSearchForm Dates
    
    id = 0;
    
    createData = (roomName, status, reservation) => {
        let id = this.id += 1;
        return { id, roomName, status, reservation};
    }
    
    data = [
        this.createData('101 Single', 'empty', 26),
        this.createData('103 Single', 'empty', 8),
        this.createData('105 Single', 'occupied', 11),
        this.createData('107 Single', 'empty', 5),
        this.createData('109 Single', 'occupied', 2),
    ];
    
    
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
                            {this.data.map(n => {
                                
                                if (n.status === 'empty') {
                                    statusColor = 'green'
                                } else {
                                    statusColor = 'red'
                                }
                                
                                return (
                                    <TableRow key={n.id}>
                                        <TableCell component="th" scope="row">
                                            <strong>{n.roomName}</strong>
                                        </TableCell>
                                        
                                        <TableCell style={{color: statusColor }}  >{n.status}</TableCell>
                                        
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
)(SingleRooms);