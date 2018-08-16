import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class Reservation extends Component {
    render() {
        return (
            <div>
                <h2>Reservation</h2>
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
                                <h6>Name:</h6>
                                <p>Benjamin Orimoloye</p>
                            </div>

                            <div style={{marginBottom:30, display: 'flex'}}>
                                <h6>Phone Number:</h6>
                                <p>2404748710</p>
                            </div>

                            <div style={{marginBottom:30, display: 'flex'}}>

                            </div>

                            <div style={{marginBottom:30, display: 'flex'}}>

                            </div>
                        </Paper>
                    </Grid>

                    <Grid item md={6}>
                        <Paper style={{ padding: 20, margin: 20}}>
                            <h5>Payment Information</h5>
                            <div style={{marginBottom:30, display: 'flex'}}>

                            </div>

                            <div style={{marginBottom:30, display: 'flex'}}>

                            </div>
                        </Paper>
                        <div style={{marginLeft: '35%'}}>

                                <Button variant="contained" color="primary">
                                    Book Reservation
                                </Button>

                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(Reservation);
