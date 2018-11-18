import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import firebase from 'firebase'

import Login from './containers/login';
import Menu from './components/primary-menu';
import Dashboard from './containers/dashboard/index';
import RoomsList from './containers/search-room/search-rooms-list';
import SingleRooms from './containers/rooms/rooms-singles';
import DoubleRooms from './containers/rooms/rooms-doubles';
import SuiteRooms from './containers/rooms/rooms-suites';
import BungalowRooms from './containers/rooms/rooms-bungalows';
import OccupiedRooms from './containers/rooms/rooms-occupied';
import EmptyRooms from './containers/rooms/rooms-empty';

import GuestsList from './containers/guests/guests-list';
import GuestsArchive from './containers/guests/guests-archive';

import Reservation from './containers/reservations/reservation';
import ReservationSearchForm from './containers/reservations/reservation-search-form';
import ReservationsList from './containers/reservations/reservations-list';
import ReservationGuestForm from './containers/reservations/reservation-guest-form';
import AllUsers from './containers/admin/admin';
import AddUser from './containers/admin/admin-create-user';

import {setInitAuthToTrue} from "./actions/actions_auth";


import './App.css';




class App extends Component {
    state = {
        userEmail: ''
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.setInitAuthToTrue()
                this.setState({
                    userEmail: user.email
                })


            }
        });
    }

    render() {
        console.log(this.state.userEmail)
        if (this.props.auth === false) {
            return (
                <BrowserRouter>
                    <Fragment>
                        <Switch>
                            <Route exact path="/login" component={Login}/>
                            <Redirect to="/login" component={Login}/>
                        </Switch>
                    </Fragment>
                </BrowserRouter>
            );
        }

        else if (this.state.userEmail === "admin@hotelapp.com") {
            return (
                //TODO: Set up routes for when user is authenticated
                <BrowserRouter>
                    <Fragment>
                        <Menu history={this.props.history}/>
                        <div style={{textAlign: 'right', paddingRight: '10px'}}>
                            <small>logged in as: <em><strong>{this.state.userEmail}</strong></em></small>
                        </div>

                        <div className="App">
                            <Switch>
                                <Route exact path="/" component={Dashboard}/>
                                <Route exact path="/Admin" component={AllUsers}/>
                                <Route exact path="/Reservation/Search" component={ReservationSearchForm}/>
                                <Route exact path="/Reservation/ReservationForm" component={ReservationGuestForm}/>
                                <Route exact path="/Reservations/All" component={ReservationsList}/>
                                {/*<Route exact path="/Reservations/Edit/:id" component={ReservationEdit}/>*/}
                                <Route exact path="/Reservations/:id" component={Reservation}/>
                                <Route exact path="/Search/Rooms" component={RoomsList}/>
                                <Route exact path="/Rooms/Singles" component={SingleRooms}/>
                                <Route exact path="/Rooms/Doubles" component={DoubleRooms}/>
                                <Route exact path="/Rooms/Suites" component={SuiteRooms}/>
                                <Route exact path="/Rooms/Bungalows" component={BungalowRooms}/>
                                <Route exact path="/Rooms/Occupied" component={OccupiedRooms}/>
                                <Route exact path="/Rooms/Empty" component={EmptyRooms}/>
                                <Route exact path="/Guests/All" component={GuestsList}/>
                                <Route exact path="/Guests/Archive" component={GuestsArchive}/>


                            </Switch>
                        </div>
                    </Fragment>
                </BrowserRouter>
            );
        }

        else {
            return (
                <BrowserRouter>
                    <Fragment>
                        <Menu history={this.props.history}/>
                        <div style={{textAlign: 'right', paddingRight: '10px'}}>
                            <small>logged in as: <em><strong>{this.state.userEmail}</strong></em></small>
                        </div>

                        <div className="App">
                            <Switch>
                                <Route exact path="/" component={Dashboard}/>
                                <Route exact path="/Reservation/Search" component={ReservationSearchForm}/>
                                <Route exact path="/Reservation/ReservationForm" component={ReservationGuestForm}/>
                                <Route exact path="/Reservations/All" component={ReservationsList}/>
                                <Route exact path="/Reservations/:id" component={Reservation}/>
                                <Route exact path="/Search/Rooms" component={RoomsList}/>
                                <Route exact path="/Rooms/Singles" component={SingleRooms}/>
                                <Route exact path="/Rooms/Doubles" component={DoubleRooms}/>
                                <Route exact path="/Rooms/Suites" component={SuiteRooms}/>
                                <Route exact path="/Rooms/Bungalows" component={BungalowRooms}/>
                                <Route exact path="/Rooms/Occupied" component={OccupiedRooms}/>
                                <Route exact path="/Rooms/Empty" component={EmptyRooms}/>
                                <Route exact path="/Guests/All" component={GuestsList}/>
                                <Route exact path="/Guests/Archive" component={GuestsArchive}/>
                                <Redirect to="/" component={Dashboard}/>
                            </Switch>
                        </div>
                    </Fragment>
                </BrowserRouter>
            );
        }
        

    }
}

const NotFound = () => {
    return (
        <div>
            <h3>Page not found! Please navigate using the menu bar.</h3>
        </div>
    );
    
};

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(
    mapStateToProps,{setInitAuthToTrue}
)(App);

