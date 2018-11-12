import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment'

import {addReservation} from "../../actions/actions_reservations";

import countryList from '../../listof/country-list'
import stateList from '../../listof/state-list'

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
            state: '',
            country: '',
            email: '',
            phone: '',
            zipCode: '',

            cardType: '',
            cardNumber: '',
            cardMonth: '',
            cardYear: '',
        }
    }
    //moment(this.props.location.state.checkin, 'YYYY-MM-DD').format('LL')

    render() {
        let countries = countryList
        let states = stateList
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
                        <Grid item md={8}>
                            <Paper style={{ padding: 20, margin: 20}}>
                                <h5>Reservation Details</h5>
                                <div>
                                    <p style={{color: '#3f51b5'}}>Room: {this.props.location.state.room} </p>

                                    <p style={{color: '#3f51b5'}}>Date: {this.props.location.state.checkin} - {this.props.location.state.checkout} <em>*(<strong>{this.numberOfNights()}</strong> nights)</em></p>
                                </div>

                                <h5>Guest Information</h5>
                                <div style={{marginBottom:30, display: 'flex'}}>
                                    <TextField label="First Name" required={true} style={{ flexGrow: 1, paddingRight: '40px' }} name="firstName" onChange={this.handleInputChange}/>
                                    <TextField label="Last Name" required={true} style={{ flexGrow: 1, paddingRight: '20px'  }} name="lastName" onChange={this.handleInputChange}/>
                                </div>

                                <div style={{marginBottom:30, display: 'flex'}}>
                                    <TextField label="Phone Number" required={true} type="number" style={{ flexGrow: 1, paddingRight: '40px' }} name="phone" onChange={this.handleInputChange}/>
                                    <TextField label="Email Address" required={true} style={{ flexGrow: 1, paddingRight: '20px' }} name="email" onChange={this.handleInputChange}/>
                                </div>

                                <div style={{marginBottom:30, display: 'flex'}}>
                                    <TextField label="Address" required={true} style={{ flexGrow: 1, paddingRight: '20px' }} name="address" onChange={this.handleInputChange}/>
                                </div>

                                <div style={{marginBottom:30, display: 'flex'}}>
                                    <TextField label="Zip Code" required={true} style={{ flexGrow: 1, paddingRight: '40px' }} name="zipCode" onChange={this.handleInputChange}/>
                                    <TextField label="City/Town" required={true} style={{ flexGrow: 1, paddingRight: '20px' }} name="city" onChange={this.handleInputChange}/>
                                </div>

                                <div style={{marginBottom:30, display: 'flex'}}>
                                    <TextField
                                        id="select-state"
                                        name="state"
                                        select
                                        label="State"
                                        value={this.state.state}
                                        style={{ flexGrow: 1, paddingRight: '40px'}}
                                        onChange={this.handleInputChange}
                                    >
                                        {states.map(state => (
                                            <MenuItem key={state} value={state}>
                                                {state}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                    <TextField
                                        id="select-country"
                                        name="country"
                                        select
                                        label="Select Country"
                                        value={this.state.country}
                                        style={{ flexGrow: 1, paddingRight: '20px'}}
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

                        <Grid item md={4}>
                            <Paper style={{ padding: 20, margin: 20}}>
                                <h5>Cost Details</h5>
                                <div style={{marginBottom:50}}>
                                    <p><span style={{color: '#3f51b5'}}>Room:</span> ${ parseFloat(this.props.location.state.price * this.numberOfNights()).toFixed(2) } <small><em>(${this.props.location.state.price} x {this.numberOfNights()} nights)</em></small> </p>

                                    <p><span style={{color: '#3f51b5'}}>Tax:</span>  ${ parseFloat(0.06 * this.props.location.state.price * this.numberOfNights()).toFixed(2) } <small><em>(6%)</em></small></p>
                                    <hr style={{width: "50%", marginLeft: "0px"}}/>

                                    <p><span style={{color: '#3f51b5'}}>Total: </span><strong style={{fontSize: 'x-large'}}>${ parseFloat((this.props.location.state.price * this.numberOfNights()) + (0.06 * this.props.location.state.price * this.numberOfNights())).toFixed(2) } </strong> </p>
                                </div>

                                <h5>Payment Information</h5>
                                <div style={{marginBottom:30, display: 'flex'}}>
                                    <TextField
                                        id="select-card"
                                        name="cardType"
                                        select
                                        required={true}
                                        label="Card Type"
                                        value={this.state.cardType}
                                        style={{ flexGrow: 1, paddingRight: '20px' }}
                                        onChange={this.handleInputChange}
                                    >
                                        {cards.map(card => (
                                            <MenuItem key={card} value={card}>
                                                {card}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                </div>

                                <div style={{marginBottom:30, display: 'flex'}}>
                                    <TextField label="Card Number" name="cardNumber" value={this.state.cardNumber} required={true} style={{ flexGrow: 1, paddingRight: '20px' }} onChange={this.handleInputChange}/>
                                </div>

                                <div style={{marginBottom:30, display: 'flex'}}>
                                    <TextField
                                        id="select-card"
                                        select
                                        name="cardMonth"
                                        required={true}
                                        label="Expiry Month"
                                        value={this.state.cardMonth}
                                        style={{ flexGrow: 1, paddingRight: '20px' }}
                                        onChange={this.handleInputChange}
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
                                        name="cardYear"
                                        required={true}
                                        label="Expiry Year"
                                        value={this.state.cardYear}
                                        style={{ flexGrow: 1, paddingRight: '20px' }}
                                        onChange={this.handleInputChange}
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

        if (
            this.state.firstName === '' ||
            this.state.lastName === '' ||
            this.state.phone === '' ||
            this.state.email === '' ||
            this.state.address === '' ||
            this.state.country === '' ||
            this.state.city === '' ||
            this.state.cardType === '' ||
            this.state.cardNumber === '' ||
            this.state.cardMonth === '' ||
            this.state.cardYear === ''
        ) {
            alert("VALIDATION ERROR: All fields marked * are required !")
            return
        }

        if (!validateEmail(this.state.email)) {
            alert("VALIDATION ERROR: Please enter a valid email address!")
            return
        }

        this.props.addReservation(this.state, (data) => {
            this.props.history.push({
                pathname: `/Reservations/${data.id}`,
            })
        })
    }

}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
    {addReservation}
)(ReservationGuestForm);
