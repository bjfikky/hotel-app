import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const roomItem = () => {
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
                    Reserve Button
                </Grid>
                
               
                
            </Grid>
            
            
        </Paper>
    );
};

export default roomItem;