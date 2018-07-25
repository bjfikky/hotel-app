import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';


const style = {
    date: {
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
        }
    }
    
    //TODO: Use date formatter package to set the checkin date to today's date
    render() {
        return (
            <Grid item md={4} xs={12}>
                <Paper style={this.props.style.paper}>
                    <h3 style={this.props.style.paperTitle}>Reservation</h3>
    
                    <form >
                        <Grid container>
                            <Grid item sm style={style.date}>
                                <TextField
                                    id="date"
                                    label="Check In"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
    
                            <Grid item sm style={style.date}>
                                <TextField
                                    id="date"
                                    label="Check Out"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
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
                            <Link to="/Search/Rooms" style={{textDecoration: 'none'}}>
                                <Button variant="contained" color="primary">
                                    Search
                                </Button>
                            </Link>
                        </div>
                        
                    </form>
    
                    <Divider style={{margin: '20px 0px'}}/>
                    
                    <form>
                        <Grid container>
                            <Grid item sm style={style.date}>
                                <TextField
                                    id="confirmation"
                                    label="Confirmation Number"
                                    type="string"
                                    placeholder="Confirmation Number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            
                            <Grid item sm style={style.date}>
                                <TextField
                                    id="lastName"
                                    label="Last Name"
                                    type="string"
                                    placeholder="Last Name"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
    
                        <div style={{padding: '10px 5px'}}>
                            <Button variant="contained" color="primary">
                                View Reservation
                            </Button>
                        </div>
                    </form>
                    
                </Paper>
            </Grid>
        );
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
)(ReservationSearchForm);
