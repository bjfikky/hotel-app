import React, {Component} from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import One from '@material-ui/icons/LooksOne';
import Two from '@material-ui/icons/LooksTwo';
import Star from '@material-ui/icons/Star';
import Home from '@material-ui/icons/Home';


class RoomFilters extends Component {
    state = {
        value: 0,
    };
    
    handleChange = (event, value) => {
        this.setState({ value });
    };
    
    render() {
        const { value } = this.state;
        
        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                
            >
                <BottomNavigationAction label="Singles" icon={<One />} />
                <BottomNavigationAction label="Doubles" icon={<Two />} />
                <BottomNavigationAction label="Suites" icon={<Star />} />
                <BottomNavigationAction label="Bungalows" icon={<Home />} />
            </BottomNavigation>
        );
    }
}


export default RoomFilters;