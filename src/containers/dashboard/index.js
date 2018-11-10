import React, {Component, Fragment} from 'react';

import Reservation from '../reservations/reservation-search-form';
import Guests from './guests';
import Rooms from './rooms';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


//TODO: Choose same height for all paper?
const style = {
    paper: {
        padding: '10px 10px 10px 10px',
        margin: '10px',
        height: '',
        overflowX: 'auto',    //allows horizontal scrolling on table
    },
    root: {
        flexGrow: 1,
    },
    paperTitle: {
        margin: '0px',
        color: '#4a4949'
    }
    
}


class Dashboard extends Component {
    
    render() {
        return (
            <Fragment>
                <Typography variant="display1" gutterBottom>
                    Dashboard
                </Typography>
    
                <Grid container>
                    <Reservation style={style} history={this.props.history}/>
                    
                    <Guests style={style}/>
                    
                    <Rooms style={style}/>
                </Grid>
            </Fragment>
        );
    }
}


export default Dashboard;
