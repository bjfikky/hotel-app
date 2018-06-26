import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Login from './containers/login';

import './App.css';

class App extends Component {
    render() {
        if (this.props.authenticated === false) {
            return (
                <BrowserRouter>
                    <Fragment>
                        <Switch>
                            <Route path="/login" component={Login}/>
                        </Switch>
                        <Redirect to="/login"/>
                    </Fragment>
                </BrowserRouter>
            );
        }
        
        return (
            //TODO: Set up routes for when user is authenticated
            <div className="App">
                
                <h1>Logged in</h1>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        authenticated: state.authenticated
    }
}

export default connect(
    mapStateToProps
)(App);

