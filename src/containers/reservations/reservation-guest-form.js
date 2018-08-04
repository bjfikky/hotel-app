import React, {Component} from 'react';
import {connect} from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';

class ReservationGuestForm extends Component {

    //TODO: Add form for making reservation and payment
    render() {
        let countries = ['Nigeria', 'USA', 'Canada'];

        return (
            <div>
                <h2>Complete Reservation</h2>
                <form action="">
                    <Grid container>
                    <Grid item md={6}>
                        <Paper style={{ padding: 20, margin: 20}}>
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