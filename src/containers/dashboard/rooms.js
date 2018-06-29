import React, {Component} from 'react';
import {connect} from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Rooms extends Component {
    
    render() {
        return (
            <Grid item md={4} xs={12}>
                <Paper style={this.props.style.paper}>
                    <h3 style={this.props.style.paperTitle}>Reservation</h3>
                </Paper>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(Rooms);
