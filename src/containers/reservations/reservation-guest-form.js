import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

class ReservationGuestForm extends Component {

    //TODO: Add form for making reservation and payment
    render() {
        let countries = ['Nigeria', 'USA', 'Canada'];
        const cards = ['VISA', 'MasterCard', 'Discover', 'American Express', 'Carte Blanche', 'JCB (Japanese)'];
        const months = ['01 - January', '02 - February', '03 - March', '04 - April', '05 - May'];
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
                <form action="">
                    <Grid container>
                        <Grid item md={6}>
                            <Paper style={{ padding: 20, margin: 20}}>
                                <h5>Reservation Details</h5>
                                <div>
                                    <p style={{color: '#3f51b5'}}>Room: 101 Single </p>
                                    <p style={{color: '#3f51b5'}}>Date: 05/20/2018 - 05/24/2018 <em>*(4 nights)</em></p>
                                </div>

                                <h5>Guest Information</h5>
                                <div style={{marginBottom:30, display: 'flex'}}>
                                    <TextField label="First Name" style={{ flexGrow: 1, paddingRight: '20px' }}/>
                                    <TextField label="Last Name" style={{ flexGrow: 1, paddingRight: '20px'  }}/>
                                </div>

                                <div style={{marginBottom:30, display: 'flex'}}>
                                    <TextField label="Phone Number" style={{ flexGrow: 1, paddingRight: '20px' }}/>
                                    <TextField label="Email Address" style={{ flexGrow: 1, paddingRight: '20px' }}/>
                                </div>

                                <div style={{marginBottom:30, display: 'flex'}}>
                                    <TextField label="Address" style={{ flexGrow: 4, paddingRight: '20px' }}/>
                                    <TextField label="City/Town" style={{ flexGrow: 1, paddingRight: '20px' }}/>
                                </div>

                                <div style={{marginBottom:30, display: 'flex'}}>
                                    <TextField label="Postal Code" style={{ flexGrow: 1, paddingRight: '20px' }}/>
                                    <TextField
                                        id="select-currency"
                                        select
                                        label="Select Country"
                                        value="Select Country"
                                        style={{ flexGrow: 3, paddingRight: '20px' }}
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
                                <Link to="/Reservation" style={{textDecoration: "none"}}>
                                    <Button variant="contained" color="primary">
                                        Book Reservation
                                    </Button>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(ReservationGuestForm);
