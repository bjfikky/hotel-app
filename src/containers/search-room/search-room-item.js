import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class roomItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Paper style={{padding: '10px', margin: '30px 0px'}}>
                <Grid container>
                    <Grid item md={2} >
                        <img src="http://via.placeholder.com/150x150" />
                    </Grid>

                    <Grid item md={8}>
                        <h4>{this.props.room.type.toUpperCase()} {this.props.room.name}</h4>
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
                checkin: this.props.checkin,
                checkout: this.props.checkout,
                room: this.props.room.name
            }
        })
    }

}

export default roomItem;