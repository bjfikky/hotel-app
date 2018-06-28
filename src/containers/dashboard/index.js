import React, {Component, Fragment} from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const style = {
    paper: {
        padding: '10px',
        margin: '10px',
        height: '500px'
    },
    root: {
        flexGrow: 1,
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
                    <Grid item md={4} xs={12}>
                        <Paper style={style.paper}>
                            Grid 1
                        </Paper>
                    </Grid>
        
                    <Grid item md={4} xs={12}>
                        <Paper style={style.paper}>
                            Grid 2
                        </Paper>
                    </Grid>
        
                    <Grid item md={4} xs={12}>
                        <Paper style={style.paper}>
                            Grid 3
                        </Paper>
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}


export default Dashboard;
