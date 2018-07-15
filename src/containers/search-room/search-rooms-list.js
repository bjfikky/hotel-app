import React from 'react';

import RoomItem from './search-room-item';
import RoomFilters from './search-room-filter';


const Rooms = () => {
    return (
        <div>
            <RoomFilters/>
           
            
            <RoomItem/>
            <RoomItem/>
            <RoomItem/>
            <RoomItem/>
        </div>
    );
};

export default Rooms;
