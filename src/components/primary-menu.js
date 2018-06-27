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
import PersonIcon from '@material-ui/icons/Person';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PersonAdd from '@material-ui/icons/PersonAdd';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';


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
    guestMenu: {
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
        guestOpen: true
    };
    
    toggleDrawer = (open) => () => {
        this.setState({
            left: open,
        });
    };
    
    handleGuestClick = () => {
        this.setState(state => ({ guestOpen: !state.guestOpen }));
    }
    
    
    render() {
        
        const guestMenuList = (
            <Collapse in={this.state.guestOpen} timeout="auto" unmountOnExit>
                <List style={styles.guestMenu}>
                    <ListItem button>
                        <ListItemIcon>
                            <PersonAdd />
                        </ListItemIcon>
                        <ListItemText inset primary="Add Guest" />
                    </ListItem>
    
                    <ListItem button>
                        <ListItemIcon>
                            <FormatListBulleted />
                        </ListItemIcon>
                        <ListItemText inset primary="Guests List" />
                    </ListItem>
                </List>
            </Collapse>
        );
        
        const sideList = (
            <List component="nav" style={styles.list} subheader={<ListSubheader component="div">App Menu Items</ListSubheader>}>
                <ListItem button onClick={this.toggleDrawer(false)}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                
                <ListItem button onClick={this.handleGuestClick}>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Guests" />
                    {this.state.guestOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                
                {guestMenuList}
                
                <ListItem button onClick={this.toggleDrawer(false)}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Rooms" />
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