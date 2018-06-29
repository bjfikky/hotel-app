import React, {Component} from 'react';
import {connect} from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



class Rooms extends Component {
    
    id = 0;
    
    createData(description, occupied, empty) {
        let id = this.id += 1;
        return { id, description, occupied, empty};
    }
    
    data = [
        this.createData('All Rooms', 29, 26),
        this.createData('Singles', 12, 8),
        this.createData('Doubles', 9, 11),
        this.createData('Suites', 5, 5),
        this.createData('Bungalows', 3, 2),
    ];
    
    render() {
        return (
            <Grid item md={4} xs={12}>
                <Paper style={this.props.style.paper}>
                    <h3 style={this.props.style.paperTitle}>Rooms</h3>
    
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell numeric>Occupied</TableCell>
                                <TableCell numeric>Empty</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.data.map(n => {
                                return (
                                    <TableRow key={n.id}>
                                        <TableCell component="th" scope="row">
                                            {n.description}
                                        </TableCell>
                                        <TableCell style={{color: 'red'}} numeric>{n.occupied}</TableCell>
                                        <TableCell style={{color: 'green'}} numeric>{n.empty}</TableCell>
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
)(Rooms);
