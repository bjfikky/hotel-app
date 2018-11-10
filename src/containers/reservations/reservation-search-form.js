import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as moment from 'moment';

import {getAvailableRooms} from "../../actions/actions_rooms";
import {searchReservation} from "../../actions/actions_reservations";


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';


const style = {
    date: {
        padding: '10px 5px',
        display: 'inline',
    },

    confirmation: {
        padding: '10px 5px',
        display: 'inline',
    }
};

let moreOptions = "more options";


class ReservationSearchForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            moreOptions: false,

            checkin: this.getTodaysDate(),
            checkout: this.getTodaysDate(1),

            confirmationNum: ''
        }
    }

    
    //TODO: Use date formatter package to set the checkin date to today's date
    render() {
        return (
            <Grid item md={4} xs={12}>
                <Paper style={this.props.style.paper}>
                    <h3 style={this.props.style.paperTitle}>Reservation</h3>
    
                    <form onSubmit={this.handleSearchFormSubmit}>
                        <Grid container>
                            <Grid item sm style={style.date}>
                                <TextField
                                    id="date"
                                    label="Check In"
                                    name="checkin"
                                    type="date"
                                    // defaultValue="2017-05-24"
                                    value={this.state.checkin}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={this.handleInputChange}
                                />
                            </Grid>
    
                            <Grid item sm style={style.date}>
                                <TextField
                                    id="date"
                                    label="Check Out"
                                    name="checkout"
                                    type="date"
                                    value={this.state.checkout}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={this.handleInputChange}
                                />
                            </Grid>
                        </Grid>
    
                        <a onClick={this.handleMoreOptions} href="" style={{paddingLeft: '5px', textDecoration: 'none'}}><small>{moreOptions}</small></a>
                        
                        {this.state.moreOptions ?
                            <div style={{padding: '5px'}}>
                                <span style={{fontSize: '14px', paddingRight: '8px'}}>Adults: <input style={{width: '40px'}} type="number" min="1" max="10" placeholder="0"/></span>
            
                                <span style={{fontSize: '14px', paddingRight: '8px'}}>Children: <input style={{width: '40px'}} type="number" min="0" max="10" placeholder="0"/></span>
            
                                <span style={{fontSize: '14px', paddingRight: '8px'}}>Rooms: <input style={{width: '40px'}} type="number" min="1" max="5" placeholder="0"/></span>
                            </div>
        
        
                            :
        
                            null
                        }
                        
                        <div style={{padding: '10px 5px'}}>
                            <Button type="submit" variant="contained" color="primary">
                                Search
                            </Button>
                        </div>
                        
                    </form>
    
                    <Divider style={{margin: '20px 0px'}}/>
                    
                    <form onSubmit={this.handleConfirmationSubmit}>
                        <Grid container>
                            <Grid item sm style={style.confirmation}>
                                <TextField
                                    id="confirmation"
                                    label="Confirmation Number"
                                    name="confirmationNum"
                                    type="string"
                                    width="400px"
                                    placeholder="Confirmation Number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={this.handleInputChange}
                                />
                            </Grid>
                        </Grid>
    
                        <div style={{padding: '10px 5px'}}>
                            <Button variant="contained" type="submit" color="primary">
                                View Reservation
                            </Button>
                        </div>
                    </form>
                    
                </Paper>
            </Grid>
        );
    }

    getTodaysDate = (days = 0) => {
        let date = moment(Date.now(), 'x').add(days, 'days')
        return date.format('YYYY-MM-DD')
    }
    
    handleMoreOptions = (event) => {
        event.preventDefault();
        console.log("more");
        
        if (moreOptions === "more options") {
            moreOptions = "less options"
        } else { moreOptions = "more options"}
        
        this.setState({
            moreOptions: !this.state.moreOptions,
        });
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSearchFormSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.checkin, this.state.checkout)
        this.props.getAvailableRooms(this.state.checkin, this.state.checkout, () => {
            console.log("calling the call back")
            this.props.history.push({
                pathname: "/Search/Rooms",
                state: {
                    checkin: this.state.checkin,
                    checkout: this.state.checkout
                }
            })
        })
    }

    handleConfirmationSubmit = (event) => {
        event.preventDefault()
        console.log("searching confirmation")
        this.props.searchReservation(this.state.confirmationNum, () => {
            this.props.history.push({
                pathname: `/Reservations/${this.state.confirmationNum}`,
            })
        })
    }
}


ReservationSearchForm.defaultProps = {
    style: {
        paper: {
            padding: '10px 10px 10px 10px',
            margin: '10px',
            height: '',
            overflowX: 'auto',    //allows horizontal scrolling on table
        },
        paperTitle: {
            margin: '0px',
            color: '#4a4949'
        }
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
    {getAvailableRooms, searchReservation}
)(ReservationSearchForm);
