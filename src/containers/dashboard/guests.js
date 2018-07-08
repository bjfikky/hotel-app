import React, {Component} from 'react';
import {connect} from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Guests extends Component {
    
    id = 0;
    
    createData = (description, number) => {
        let id = this.id += 1;
        return { id, description, number};
    }
    
    data = [
        this.createData('Occupants', 38),
        this.createData('Checking Out Today', 12),
        this.createData('Reservations', 9),
        this.createData('Guests this Month', 5),
        this.createData('Guests Last Month (June)', 3),
    ];
    
    
    render() {
        return (
            <Grid item md={4} xs={12}>
                <Paper style={this.props.style.paper}>
                    <h3 style={this.props.style.paperTitle}>Guests</h3>
    
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell numeric>Number</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.data.map(n => {
                                return (
                                    <TableRow key={n.id}>
                                        <TableCell component="th" scope="row">
                                            {n.description}
                                        </TableCell>
                                        <TableCell style={{color: 'green'}} numeric>{n.number}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(Guests);
