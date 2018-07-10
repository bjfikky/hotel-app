import React from 'react';

import RoomItem from './search-room-item';
import RoomFilters from './search-room-filter';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


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
