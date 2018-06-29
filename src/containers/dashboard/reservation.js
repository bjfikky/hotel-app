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
    
                        {this.state.moreOptions ?
                            <div style={{padding: '5px'}}>
                                <span style={{fontSize: '14px', paddingRight: '8px'}}>Adults: <input style={{width: '40px'}} type="number" min="1" max="10" placeholder="0"/></span>
            
                                <span style={{fontSize: '14px', paddingRight: '8px'}}>Children: <input style={{width: '40px'}} type="number" min="1" max="10" placeholder="0"/></span>
            
                                <span style={{fontSize: '14px', paddingRight: '8px'}}>Rooms: <input style={{width: '40px'}} type="number" min="1" max="5" placeholder="0"/></span>
                            </div>
        
        
                            :
        
                            null
                        }
                        
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
        
        if (moreOptions === "more options") {
            moreOptions = "less options"
        } else { moreOptions = "more options"}
        
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
