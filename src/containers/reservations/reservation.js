import React, {Component} from 'react';
import {connect} from 'react-redux';

import moment from 'moment'

import {getReservation} from "../../actions/actions_reservations";
import {checkinReservation} from "../../actions/actions_reservations";
import {checkoutReservation} from "../../actions/actions_reservations";
import {deleteReservation} from "../../actions/actions_reservations";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class Reservation extends Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getReservation(id)
    }

    render() {
        if (! this.props.reservation) {
            return (
                <h3>The reservation does not exist</h3>
            )
        }

        return (
            <div>
                <h2>Reservation</h2>
                <Grid container>
                    <Grid item md={12}>
                        <Paper style={{ padding: 20, margin: 20}}>
                            <h4>Reservation Details</h4>
                            <div>
                                <p style={{padding: "10px 0"}}>Reservation Number: <span style={{color: '#3f51b5', padding: "0px 10px", fontWeight: 'bolder'}}>{this.props.reservation.id}</span> </p>
                                <p style={{padding: "10px 0"}}>Room: <span style={{color: '#3f51b5', padding: "0px 10px", fontWeight: 'bolder'}}>{this.props.reservation.room} </span></p>

                                {
                                    this.props.reservation.status ?
                                        <p style={{padding: "10px 0"}}>Status: <span style={{color: '#3f51b5', padding: "0px 10px", fontWeight: 'bolder'}}>{this.props.reservation.status} </span></p> : ''
                                }


                                <p style={{padding: "10px 0"}}>Checkin Date: <span style={{color: '#3f51b5', padding: "0px 10px", fontWeight: 'bolder'}}>{this.props.reservation.checkin}</span></p>
                                <p style={{padding: "10px 0"}}>Checkout Date: <span style={{color: '#3f51b5', padding: "0px 10px", fontWeight: 'bolder'}}>{this.props.reservation.checkout} <em>*({this.numberOfNights()} nights)</em></span></p>
                            </div>

                            <hr/>

                            <h4>Guest Information</h4>
                            <Grid container>
                                <Grid item md={4}>
                                    <div>
                                        <h5>Name:</h5>
                                        <p style={{color: '#3f51b5', fontWeight: 'bolder'}}>{this.props.reservation.firstName} {this.props.reservation.lastName}</p>
                                    </div>

                                    <div>
                                        <h5>Phone Number:</h5>
                                        <p style={{color: '#3f51b5', fontWeight: 'bolder'}}>{this.props.reservation.phone}</p>
                                    </div>
                                </Grid>

                                <Grid item md={8}>
                                    <div>
                                        <h5>Email Address:</h5>
                                        <p style={{color: '#3f51b5', fontWeight: 'bolder'}}>{this.props.reservation.email}</p>
                                    </div>

                                    <div>
                                        <h5>Address:</h5>
                                        <p style={{color: '#3f51b5', fontWeight: 'bolder'}}>{this.props.reservation.address}, {this.props.reservation.city}, {this.props.reservation.state} - {this.props.reservation.zipCode}, {this.props.reservation.country}</p>
                                    </div>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid justify="space-between" container>
                    <Grid item>
                        {
                            this.props.reservation.status === 'CHECKED IN'
                                ?
                                <Button onClick={this.checkout} variant="contained" color="primary">
                                    Check Out Guest
                                </Button>
                                :
                                <Button onClick={this.checkin} variant="contained" color="primary">
                                    Check In Guest
                                </Button>
                        }
                    </Grid>

                    <Grid item>
                        <Button onClick={this.handleDeleteReservation}  variant="contained" color="secondary">
                            Delete Reservation
                        </Button>
                    </Grid>

                </Grid>

            </div>
        );
    }


    numberOfNights = () => {
        let from = moment(this.props.reservation.checkin, 'MM/DD/YYYY')
        let to = moment(this.props.reservation.checkout, 'MM/DD/YYYY')
        return to.diff(from, 'days')
    }

    checkin = () => {
        this.props.checkinReservation(this.props.match.params.id, () => {
            this.props.getReservation(this.props.match.params.id)
        })
    }

    checkout = () => {
        this.props.checkoutReservation(this.props.match.params.id, () => {
            this.props.getReservation(this.props.match.params.id)
        })
    }

    handleDeleteReservation = () => {
        let confirm = window.confirm("Are you sure you want to delete this reservation?");

        if (confirm) {
            let id = this.props.match.params.id;
            this.props.deleteReservation(id, () => {
                window.alert("Reservation Deleted")
                this.props.history.push({
                    pathname: '/Reservations/All',
                })
            })
        }
    }

}

function mapStateToProps(state) {
    return {
        reservation: state.reservation
    };
}

export default connect(
    mapStateToProps,
    {getReservation, checkinReservation, checkoutReservation, deleteReservation}
)(Reservation);
