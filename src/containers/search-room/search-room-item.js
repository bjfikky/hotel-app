import React from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const roomItem = () => {
    //TODO: Reserve button link to the correct route
    return (
        <Paper style={{padding: '10px', margin: '30px 0px'}}>
            <Grid container>
                <Grid item md={2} >
                    <img src="http://via.placeholder.com/150x150" />
                </Grid>
                
                <Grid item md={8}>
                    <h4>Room Name</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda consequatur culpa
                        deserunt dolorum error eveniet exercitationem fugit harum iste laborum maxime minus natus,
                        nemo quam, repudiandae sint tenetur ullam.</p>
                    <ul>
                        <li>smoking</li>
                        <li>beach view</li>
                        <li>corner room</li>
                        <li>top floor</li>
                    </ul>
                </Grid>
                
                <Grid item md={2}>
                    <h5 style={{color: 'green'}}>$165.00</h5>
                    <Link to="/Reservation/ReservationForm" style={{textDecoration: 'none'}}>
                        <Button variant="contained" color="primary">
                            Reserve
                        </Button>
                    </Link>
                </Grid>
                
               
                
            </Grid>
            
            
        </Paper>
    );
};

export default roomItem;