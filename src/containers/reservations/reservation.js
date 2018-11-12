import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getReservation} from "../../actions/actions_reservations";
import {checkinReservation} from "../../actions/actions_reservations";
import {checkoutReservation} from "../../actions/actions_reservations";

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
                                <p style={{color: '#3f51b5'}}>Reservation Number: {this.props.reservation.id} </p>
                                <p style={{color: '#3f51b5'}}>Room: {this.props.reservation.room} </p>
                                <p style={{color: '#3f51b5'}}>Status: {this.props.reservation.status} </p>
                                <p style={{color: '#3f51b5'}}>Checkin Date: {this.props.reservation.checkin}</p>
                                <p style={{color: '#3f51b5'}}>Checkout Date: {this.props.reservation.checkout} <em>*(4 nights)</em></p>
                            </div>

                            <hr/>

                            <h4>Guest Information</h4>
                            <Grid container>
                                <Grid item md={4}>
                                    <div>
                                        <h6>Name:</h6>
                                        <p>{this.props.reservation.firstName} {this.props.reservation.lastName}</p>
                                    </div>

                                    <div>
                                        <h6>Phone Number:</h6>
                                        <p>{this.props.reservation.phone}</p>
                                    </div>
                                </Grid>

                                <Grid item md={8}>
                                    <div>
                                        <h6>Email Address:</h6>
                                        <p>{this.props.reservation.email}</p>
                                    </div>

                                    <div>
                                        <h6>Address:</h6>
                                        <p>{this.props.reservation.address}, {this.props.reservation.city} - {this.props.reservation.zipCode}, {this.props.reservation.country}</p>
                                    </div>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>


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

            </div>
        );
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

}

function mapStateToProps(state) {
    return {
        reservation: state.reservation
    };
}

export default connect(
    mapStateToProps,
    {getReservation, checkinReservation, checkoutReservation}
)(Reservation);
