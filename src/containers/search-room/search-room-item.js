import React, {Component} from 'react';
import moment from 'moment'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class roomItem extends Component {

    render() {
        return (
            <Paper style={{padding: '10px', margin: '30px 0px'}}>
                <Grid container>
                    <Grid item md={2} >
                        <img src="http://via.placeholder.com/150x150" alt='room '/>
                    </Grid>

                    <Grid item md={8}>
                        <h4>{this.props.room.type.toUpperCase()} {this.props.room.name}</h4>
                        <p>Short description lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda consequatur culpa
                            deserunt dolorum error eveniet exercitationem fugit harum iste laborum maxime minus natus,
                            nemo quam, repudiandae sint.</p>
                        <ul>
                            <li>smoking</li>
                            <li>beach view</li>
                            <li>corner room</li>
                            <li>top floor</li>
                        </ul>
                    </Grid>

                    <Grid item md={2}>
                        <h5 style={{color: 'green'}}>${this.props.room.price}</h5>

                        <Button variant="contained" color="primary" onClick={this.handleReserveClick}>
                            Reserve
                        </Button>

                    </Grid>



                </Grid>


            </Paper>
        )
    }

    handleReserveClick = () => {
        console.log("reserve clicked",this.props.checkin, this.props.checkout)
        this.props.history.push({
            pathname: "/Reservation/ReservationForm",
            state: {
                checkin: moment(this.props.checkin, 'YYYY-MM-DD').format('L'),
                checkout: moment(this.props.checkout, 'YYYY-MM-DD').format('L'),
                room: this.props.room.name,
                roomId: this.props.room.id
            }
        })
    }

}

export default roomItem;