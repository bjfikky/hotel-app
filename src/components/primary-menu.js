import React, {Component} from 'react';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PersonAdd from '@material-ui/icons/PersonAdd';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import Archive from '@material-ui/icons/Archive';
import Search from '@material-ui/icons/Search';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import AddCircle from '@material-ui/icons/AddCircleOutline';
import One from '@material-ui/icons/LooksOne';
import Two from '@material-ui/icons/LooksTwo';
import Star from '@material-ui/icons/Star';
import Power from '@material-ui/icons/PowerSettingsNew';


const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    flex: {
        flex: 1,
    },
    subMenu: {
        paddingLeft: '30px',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class TemporaryDrawer extends Component {
    state = {
        left: false,
        guestOpen: true,
        roomOpen: false
    };
    
    toggleDrawer = (open) => () => {
        this.setState({
            left: open,
        });
    };
    
    handleGuestsMenuClick = () => {
        this.setState(state => ({ guestOpen: !state.guestOpen }));
    }
    
    handleRoomsMenuClick = () => {
        this.setState(state => ({ roomOpen: !state.roomOpen }));
    }
    

    render() {
        
        const guestMenuList = (
            <Collapse in={this.state.guestOpen} timeout="auto" unmountOnExit>
                <List style={styles.subMenu}>
                    <ListItem button onClick={this.toggleDrawer(false)}>
                        <ListItemIcon>
                            <PersonAdd />
                        </ListItemIcon>
                        <ListItemText inset primary="Add Guest" />
                    </ListItem>
    
                    <ListItem button onClick={this.toggleDrawer(false)}>
                        <ListItemIcon>
                            <FormatListBulleted />
                        </ListItemIcon>
                        <ListItemText inset primary="Guests List" />
                    </ListItem>
    
                    <ListItem button onClick={this.toggleDrawer(false)}>
                        <ListItemIcon>
                            <Archive />
                        </ListItemIcon>
                        <ListItemText inset primary="Past Guests" />
                    </ListItem>
    
                    <ListItem button onClick={this.toggleDrawer(false)}>
                        <ListItemIcon>
                            <Search />
                        </ListItemIcon>
                        <ListItemText inset primary="Search" />
                    </ListItem>
                </List>
            </Collapse>
        );
    
        const roomMenuList = (
            <Collapse in={this.state.roomOpen} timeout="auto" unmountOnExit>
                <List style={styles.subMenu}>
                    <ListItem button onClick={this.toggleDrawer(false)}>
                        <ListItemIcon>
                            <AddCircle />
                        </ListItemIcon>
                        <ListItemText inset primary="Empty" />
                    </ListItem>
                
                    <ListItem button onClick={this.toggleDrawer(false)}>
                        <ListItemIcon>
                            <RemoveCircle />
                        </ListItemIcon>
                        <ListItemText inset primary="Occupied" />
                    </ListItem>
                
                    <ListItem button onClick={this.toggleDrawer(false)}>
                        <ListItemIcon>
                            <One />
                        </ListItemIcon>
                        <ListItemText inset primary="Singles" />
                    </ListItem>
                
                    <ListItem button onClick={this.toggleDrawer(false)}>
                        <ListItemIcon>
                            <Two />
                        </ListItemIcon>
                        <ListItemText inset primary="Doubles" />
                    </ListItem>
    
                    <ListItem button onClick={this.toggleDrawer(false)}>
                        <ListItemIcon>
                            <Star />
                        </ListItemIcon>
                        <ListItemText inset primary="Suites" />
                    </ListItem>
                </List>
            </Collapse>
        );
        
        
        
        const sideList = (
            <List component="nav" style={styles.list} subheader={<ListSubheader component="div">App Menu</ListSubheader>}>
                <ListItem button onClick={this.toggleDrawer(false)}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                
                <ListItem button onClick={this.handleGuestsMenuClick}>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Guests" />
                    {this.state.guestOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                
                {guestMenuList}
                
                <ListItem button onClick={this.handleRoomsMenuClick}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Rooms" />
                    {this.state.roomOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                
                {roomMenuList}
                
                <Divider/>
    
                <ListItem button>
                    
                    <ListItemText primary="Logout" />
                </ListItem>
            </List>
        );
        
        
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={this.toggleDrawer(true)} style={styles.menuButton} aria-label="Menu" color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" style={styles.flex}>
                            Hotel App
                        </Typography>
                        
                        <Button color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
                
               
                
                <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onKeyDown={this.toggleDrawer(false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            
            </div>
        );
    }
}


export default TemporaryDrawer;