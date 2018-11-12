import React, {Component} from 'react';


import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import One from '@material-ui/icons/LooksOne';
import Two from '@material-ui/icons/LooksTwo';
import Star from '@material-ui/icons/Star';
import Home from '@material-ui/icons/Home';

import RoomItem from './search-room-item';
import RoomFilters from './search-room-filter';
import {connect} from "react-redux";


class Rooms extends Component {

    render() {
        return (

            <div>

                {
                    this.props.rooms.map(room => {

                        return (
                            <RoomItem
                                checkin={this.props.location.state.checkin}
                                checkout={this.props.location.state.checkout}
                                room={room}
                                key={room.id}
                                history={this.props.history}
                            />
                        )
                    })
                }

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        rooms: state.rooms
    };
}

export default connect(
    mapStateToProps,
)(Rooms);
