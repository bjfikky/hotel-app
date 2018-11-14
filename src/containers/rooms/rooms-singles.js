import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as moment from 'moment';

import {getRooms} from "../../actions/actions_rooms";
import {getRoomsByDate} from "../../actions/actions_rooms";

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'



class SingleRooms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: this.getTodaysDate()
        }
    }

    componentWillMount() {
        this.props.getRoomsByDate(this.state.date)
    }

    render() {
        let statusColor = '';

        return (
                <Paper style={{padding: '20px'}}>
                    <h3>Single Rooms</h3>

                    <form action="">
                        <TextField
                            id="date"
                            label="Check by Date"
                            name="date"
                            type="date"
                            value={this.state.date}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{margin: "10px 30px"}}
                            onChange={this.handleInputChange}
                        />

                        <Button variant="contained" color="primary" onClick={this.handleCheck}>Check</Button>

                    </form>

                    <br/>

                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>Room Name</TableCell>
                                <TableCell>Occupied or Reserved </TableCell>
                                <TableCell>Checkin Date</TableCell>
                                <TableCell>CheckOut Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.props.rooms.map(n => {

                                    if (n.type === 'single') {
                                        if (n.isOccupied) {
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
                                                    {n.isOccupied ? n.reservation.firstName + " " + n.reservation.lastName  : 'empty'}
                                                </TableCell>

                                                <TableCell style={{color: statusColor }}>{n.guest ? n.guest.checkinDate  : ''}</TableCell>
                                                <TableCell style={{color: statusColor }}>{n.guest ? n.guest.checkoutDate  : ''}</TableCell>
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


    getTodaysDate = (days = 0) => {
        let date = moment(Date.now(), 'x').add(days, 'days')
        return date.format('YYYY-MM-DD')
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleCheck = () => {
        this.props.getRoomsByDate(this.state.date)
    }
}

function mapStateToProps(state) {
    return {
        rooms: state.rooms
    };
}

export default connect(
    mapStateToProps,
    {getRooms, getRoomsByDate}
)(SingleRooms);