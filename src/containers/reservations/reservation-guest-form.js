import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment'

import {addReservation} from "../../actions/actions_reservations";

import countryList from '../../listof'

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

class ReservationGuestForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            roomId: this.props.location.state.roomId,
            room: this.props.location.state.room,
            checkin: this.props.location.state.checkin,
            checkout: this.props.location.state.checkout,

            firstName: '',
            lastName: '',
            address: '',
            city: '',
            country: '',
            email: '',
            phone: '',
            zipCode: '',
        }
    }
    //moment(this.props.location.state.checkin, 'YYYY-MM-DD').format('LL')

    render() {
        let countries = countryList
        const cards = ['VISA', 'MasterCard', 'Discover', 'American Express', 'Carte Blanche', 'JCB (Japanese)'];
        const months = ['01 - January', '02 - February', '03 - March', '04 - April', '05 - May', '06 - June', '07 - July', '08 - August', '09 - September', '10 - October', '11 - November', '12 - December'];
        const years = (currentYear) => {
            let years = [currentYear];
            for(let i = 0; i < 10; i++) {
                currentYear++;
                years.push(currentYear);
            }
            return years;
        };

        return (
            <div>
                <h2>Complete Reservation</h2>
                <form onSubmit={this.handleBookReservation}>
                    <Grid container>
                        <Grid item md={6}>
                            <Paper style={{ padding: 20, margin: 20}}>
                                <h5>Reservation Details</h5>
                                <div>
                                    <p style={{color: '#3f51b5'}}>Room: {this.props.location.state.room} </p>

                                    <p style={{color: '#3f51b5'}}>Date: {this.props.location.state.checkin} - {this.props.location.state.checkout} <em>*(<strong>{this.numberOfNights()}</strong> nights)</em></p>
                                </div>

                                <h5>Guest Information</h5>
                                <div style={{marginBottom:30, display: 'flex'}}>
                                    <TextField label="First Name" style={{ flexGrow: 1, paddingRight: '20px' }} name="firstName" onChange={this.handleInputChange}/>
                                    <TextField label="Last Name" style={{ flexGrow: 1, paddingRight: '20px'  }} name="lastName" onChange={this.handleInputChange}/>
                                </div>

                                <div style={{marginBottom:30, display: 'flex'}}>
                                    <TextField label="Phone Number" style={{ flexGrow: 1, paddingRight: '20px' }} name="phone" onChange={this.handleInputChange}/>
                                    <TextField label="Email Address" style={{ flexGrow: 1, paddingRight: '20px' }} name="email" onChange={this.handleInputChange}/>
                                </div>

                                <div style={{marginBottom:30, display: 'flex'}}>
                                    <TextField label="Address" style={{ flexGrow: 4, paddingRight: '20px' }} name="address" onChange={this.handleInputChange}/>
                                    <TextField label="City/Town" style={{ flexGrow: 1, paddingRight: '20px' }} name="city" onChange={this.handleInputChange}/>
                                </div>

                                <div style={{marginBottom:30, display: 'flex'}}>
                                    <TextField label="Zip Code" style={{ flexGrow: 1, paddingRight: '20px' }} name="zipCode" onChange={this.handleInputChange}/>
                                    <TextField
                                        id="select-country"
                                        name="country"
                                        select
                                        label="Select Country"
                                        value={this.state.country}
                                        style={{ flexGrow: 3, paddingRight: '20px' }}
                                        onChange={this.handleInputChange}
                                    >
                                        {countries.map(country => (
                                            <MenuItem key={country} value={country}>
                                                {country}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                            </Paper>
                        </Grid>

                        <Grid item md={6}>
                            <Paper style={{ padding: 20, margin: 20}}>
                                <h5>Payment Information</h5>
                                <div style={{marginBottom:30, display: 'flex'}}>
                                    <TextField
                                        id="select-card"
                                        select
                                        label="Payment Card Type"
                                        value="Select Card"
                                        style={{ flexGrow: 1, paddingRight: '20px' }}
                                    >
                                        {cards.map(card => (
                                            <MenuItem key={card} value={card}>
                                                {card}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                    <TextField label="Card Number" style={{ flexGrow: 1, paddingRight: '20px' }}/>
                                </div>

                                <div style={{marginBottom:30, display: 'flex'}}>
                                    <TextField
                                        id="select-card"
                                        select
                                        label="Expiry Month"
                                        value="Select Card"
                                        style={{ flexGrow: 1, paddingRight: '20px' }}
                                    >
                                        {months.map(month => (
                                            <MenuItem key={month} value={month}>
                                                {month}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                    <TextField
                                        id="select-card"
                                        select
                                        label="Expiry Year"
                                        value="Select Card"
                                        style={{ flexGrow: 1, paddingRight: '20px' }}
                                    >
                                        {years(2018).map(year => (
                                            <MenuItem key={year} value={year}>
                                                {year}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                            </Paper>
                            <div style={{marginLeft: '35%'}}>

                                <Button type="submit" variant="contained" color="primary">
                                    Book Reservation
                                </Button>

                            </div>
                        </Grid>
                    </Grid>
                </form>
            </div>
        );
    }


    numberOfNights = () => {
        let from = moment(this.props.location.state.checkin, 'MM/DD/YYYY')
        let to = moment(this.props.location.state.checkout, 'MM/DD/YYYY')
        return to.diff(from, 'days')
    }


    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleBookReservation = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.props.addReservation(this.state, (data) => {
            this.props.history.push({
                pathname: `/Reservations/${data.id}`,
            })
        })
    }

}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
    {addReservation}
)(ReservationGuestForm);
