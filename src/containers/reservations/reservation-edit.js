// import React, {Component} from 'react';
// import {connect} from 'react-redux';
//
// import moment from 'moment'
//
// import {getReservation} from "../../actions/actions_reservations";
//
//
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import TextField from "@material-ui/core/TextField";
//
// class ReservationEdit extends Component {
//     componentDidMount() {
//         let id = this.props.match.params.id;
//         this.props.getReservation(id)
//         this.setState({
//             firstName: this.props.reservation.firstName
//         })
//     }
//
//     render() {
//         console.log("From here", this.state)
//
//         if (! this.props.reservation) {
//             return (
//                 <h3>The reservation does not exist</h3>
//             )
//         }
//
//         return (
//             <div>
//                 <h2>Reservation</h2>
//                 <form action="">
//
//                     <Grid container>
//                         <Grid item md={12}>
//                             <Paper style={{ padding: 20, margin: 20}}>
//                                 <h4>Reservation Details</h4>
//                                 <div>
//                                     <p style={{padding: "10px 0"}}>Reservation Number: <span style={{color: '#3f51b5', padding: "0px 10px", fontWeight: 'bolder'}}>{this.props.reservation.id}</span> </p>
//                                     <p style={{padding: "10px 0"}}>Room: <span style={{color: '#3f51b5', padding: "0px 10px", fontWeight: 'bolder'}}>{this.props.reservation.room} </span></p>
//
//                                     {
//                                         this.props.reservation.status ?
//                                             <p style={{padding: "10px 0"}}>Status: <span style={{color: '#3f51b5', padding: "0px 10px", fontWeight: 'bolder'}}>{this.props.reservation.status} </span></p> : ''
//                                     }
//
//
//                                     <p style={{padding: "10px 0"}}>Checkin Date: <span style={{color: '#3f51b5', padding: "0px 10px", fontWeight: 'bolder'}}>{this.props.reservation.checkin}</span></p>
//                                     <p style={{padding: "10px 0"}}>Checkout Date: <span style={{color: '#3f51b5', padding: "0px 10px", fontWeight: 'bolder'}}>{this.props.reservation.checkout} <em>*({this.numberOfNights()} nights)</em></span></p>
//                                 </div>
//
//                                 <hr/>
//
//                                 <h4>Guest Information</h4>
//
//
//
//                                 <Grid container>
//                                     <Grid item md={4}>
//                                         <div>
//                                             <h5>Name:</h5>
//                                             <TextField label="First Name" value={this.state.firstName} required={true} style={{paddingRight: '40px' }} name="firstName" onChange={this.handleInputChange}/>
//                                             <TextField label="Last Name" required={true} style={{ flexGrow: 1, paddingRight: '20px'  }} name="lastName" onChange={this.handleInputChange}/>
//                                             <p style={{color: '#3f51b5', fontWeight: 'bolder'}}>{this.props.reservation.firstName} {this.props.reservation.lastName}</p>
//                                         </div>
//
//                                         <div>
//                                             <h5>Phone Number:</h5>
//                                             <p style={{color: '#3f51b5', fontWeight: 'bolder'}}>{this.props.reservation.phone}</p>
//                                         </div>
//                                     </Grid>
//
//                                     <Grid item md={8}>
//                                         <div>
//                                             <h5>Email Address:</h5>
//                                             <p style={{color: '#3f51b5', fontWeight: 'bolder'}}>{this.props.reservation.email}</p>
//                                         </div>
//
//                                         <div>
//                                             <h5>Address:</h5>
//                                             <p style={{color: '#3f51b5', fontWeight: 'bolder'}}>{this.props.reservation.address}, {this.props.reservation.city}, {this.props.reservation.state} - {this.props.reservation.zipCode}, {this.props.reservation.country}</p>
//                                         </div>
//                                     </Grid>
//
//                                 </Grid>
//                             </Paper>
//                         </Grid>
//                     </Grid>
//
//                     <Grid justify="space-between" container>
//                         <Grid item>
//                             <Button variant="contained" color="primary">
//                                 Save Guest Info
//                             </Button>
//                         </Grid>
//
//                         <Grid item>
//                             <Button variant="contained">
//                                 Cancel Edit
//                             </Button>
//                         </Grid>
//
//                     </Grid>
//
//                 </form>
//
//             </div>
//         );
//     }
//
//
//     numberOfNights = () => {
//         let from = moment(this.props.reservation.checkin, 'MM/DD/YYYY')
//         let to = moment(this.props.reservation.checkout, 'MM/DD/YYYY')
//         return to.diff(from, 'days')
//     }
//
//     checkin = () => {
//         this.props.checkinReservation(this.props.match.params.id, () => {
//             this.props.getReservation(this.props.match.params.id)
//         })
//     }
//
//     checkout = () => {
//         this.props.checkoutReservation(this.props.match.params.id, () => {
//             this.props.getReservation(this.props.match.params.id)
//         })
//     }
//
//     handleInputChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }
//
//
//
//
// }
//
// function mapStateToProps(state) {
//     return {
//         reservation: state.reservation
//     };
// }
//
// export default connect(
//     mapStateToProps,
//     {getReservation}
// )(ReservationEdit);
