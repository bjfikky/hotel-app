import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Login from './containers/login';
import Menu from './components/primary-menu';
import Dashboard from './containers/dashboard/index';
import RoomsList from './containers/search-room/search-rooms-list';
import SingleRooms from './containers/rooms/rooms-singles';
import OccupiedRooms from './containers/rooms/rooms-occupied';

import './App.css';



class App extends Component {
    render() {
        if (this.props.authenticated === false) {
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
        
        return (
            //TODO: Set up routes for when user is authenticated
            <BrowserRouter>
                <Fragment>
                    <Menu/>
                    <div className="App">
                        <Switch>
                            <Route exact path="/" component={Dashboard}/>
                            <Route exact path="/Search/Rooms" component={RoomsList}/>
                            <Route exact path="/Rooms/Singles" component={SingleRooms}/>
                            <Route exact path="/Rooms/Occupied" component={OccupiedRooms}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </Fragment>
            </BrowserRouter>
        );
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
        authenticated: state.authenticated
    }
}

export default connect(
    mapStateToProps
)(App);

