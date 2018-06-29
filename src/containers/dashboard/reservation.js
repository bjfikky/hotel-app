import React, {Component} from 'react';
import {connect} from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const style = {
    date: {
        padding: '10px 5px',
        display: 'inline',
    }
};

let moreOptions = "more options";


class Reservation extends Component {
    
    state = {
        moreOptions: false,
    }
    
    //TODO: Use date formatter package to set the checkin date to today's date
    //TODO: Add a grid in the form that will be toggled with the "more options" link
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
                            
                            {this.state.moreOptions ?
                                <p>more</p>
                                
                                :
                                
                                null
                            }
                        </Grid>
                        
                        <a onClick={this.handleMoreOptions} href="" style={{paddingLeft: '5px', textDecoration: 'none'}}><small>{moreOptions}</small></a>
                        
                        <div style={{padding: '10px 5px'}}>
                            <Button variant="contained" color="primary">
                                Search
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
        moreOptions = "less options";
        this.setState({
            moreOptions: !this.state.moreOptions,
        });
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(Reservation);
