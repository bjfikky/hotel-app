import React, {Component} from 'react';

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
                            <RoomItem room={room} key={room.id}/>
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
