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
                    <Grid item md={12}>
                        <Paper style={{ padding: 20, margin: 20}}>
                            <h4>Reservation Details</h4>
                            <div>
                                <p style={{color: '#3f51b5'}}>Reservation Number: 164847364748 </p>
                                <p style={{color: '#3f51b5'}}>Room: 101 Single </p>
                                <p style={{color: '#3f51b5'}}>Date: 05/20/2018 - 05/24/2018 <em>*(4 nights)</em></p>
                                <p style={{color: '#3f51b5'}}>No. of Occupants: 3 </p>
                            </div>

                            <hr/>

                            <h4>Guest Information</h4>
                            <Grid container>
                                <Grid item md={4}>
                                    <div>
                                        <h6>Name:</h6>
                                        <p>Benjamin Orimoloye</p>
                                    </div>

                                    <div>
                                        <h6>Phone Number:</h6>
                                        <p>2404748710</p>
                                    </div>
                                </Grid>

                                <Grid item md={8}>
                                    <div>
                                        <h6>Email Address:</h6>
                                        <p>bjfikky@yahoo.com</p>
                                    </div>

                                    <div>
                                        <h6>Address:</h6>
                                        <p>Goucher Road, Towson - MD 21204</p>
                                    </div>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>

                <Button variant="contained" color="primary">
                    Check In Guest
                </Button>
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
