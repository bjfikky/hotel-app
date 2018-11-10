import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import RoomItem from './search-room-item';
import RoomFilters from './search-room-filter';
import {connect} from "react-redux";


class Rooms extends Component {
    render() {
        return (
            <div>

                <RoomFilters/>

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
