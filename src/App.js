import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Login from './containers/login';
import Menu from './components/primary-menu';
import Dashboard from './containers/dashboard/index';

import './App.css';



class App extends Component {
    render() {
        if (this.props.authenticated === false) {
            return (
                <BrowserRouter>
                    <Fragment>
                        <Switch>
                            <Route path="/login" component={Login}/>
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
                            <Route path="/" component={Dashboard}/>
                        </Switch>
                    </div>
                </Fragment>
            </BrowserRouter>
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

