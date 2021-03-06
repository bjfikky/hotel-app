import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import firebase from 'firebase'
import {logout} from "../actions/actions_auth";


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
import Badge from '@material-ui/core/Badge';
import Collapse from '@material-ui/core/Collapse';

import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PersonAdd from '@material-ui/icons/PersonAdd';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import Archive from '@material-ui/icons/Archive';

import One from '@material-ui/icons/LooksOne';
import Two from '@material-ui/icons/LooksTwo';
import Star from '@material-ui/icons/Star';
import Home from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';



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

class MenuDrawer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            left: false,
            reservationOpen: true,
            guestOpen: true,
            roomOpen: false,
            userEmail: ''
        };
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    userEmail: user.email
                })


            } else console.log("not logged in")
        });
    }
    
    toggleDrawer = (open) => () => {
        this.setState({
            left: open,
        });
    };

    handleReservationsMenuClick = () => {
        this.setState(state => ({ reservationOpen: !state.reservationOpen }));
    }
    
    handleGuestsMenuClick = () => {
        this.setState(state => ({ guestOpen: !state.guestOpen }));
    }
    
    handleRoomsMenuClick = () => {
        this.setState(state => ({ roomOpen: !state.roomOpen }));
    }
    

    render() {

        // SIDEBAR RESERVATIONS MENU ITEMS
        const reservationMenuList = (
            <Collapse in={this.state.reservationOpen} timeout="auto" unmountOnExit>
                <List style={styles.subMenu}>
                    <Link to="/Reservation/Search" style={{textDecoration: "none"}}>
                        <ListItem button onClick={this.toggleDrawer(false)}>
                            <ListItemIcon>
                                <PersonAdd />
                            </ListItemIcon>
                            <ListItemText inset primary="Reserve" />
                        </ListItem>
                    </Link>

                    <Link to="/Reservations/All" style={{textDecoration: "none"}}>
                        <ListItem button onClick={this.toggleDrawer(false)}>
                            <ListItemIcon>
                                <FormatListBulleted />
                            </ListItemIcon>
                            <ListItemText inset primary="Reservations List" />
                        </ListItem>
                    </Link>
                </List>
            </Collapse>
        );



        // SIDEBAR GUESTS MENU ITEMS
        const guestMenuList = (
            <Collapse in={this.state.guestOpen} timeout="auto" unmountOnExit>
                <List style={styles.subMenu}>
                    <Link to="/Guests/All" style={{textDecoration: "none"}}>
                        <ListItem button onClick={this.toggleDrawer(false)}>
                            <ListItemIcon>
                                <FormatListBulleted />
                            </ListItemIcon>
                            <ListItemText inset primary="Guests List" />
                        </ListItem>
                    </Link>

                    <Link to="/Guests/Archive" style={{textDecoration: "none"}}>
                        <ListItem button onClick={this.toggleDrawer(false)}>
                            <ListItemIcon>
                                <Archive />
                            </ListItemIcon>
                            <ListItemText inset primary="Past Guests" />
                        </ListItem>
                    </Link>
                </List>
            </Collapse>
        );


        // SIDEBAR ROOMS MENU ITEMS
        const roomMenuList = (
            <Collapse in={this.state.roomOpen} timeout="auto" unmountOnExit>
                <List style={styles.subMenu}>

                    <Link to="/Rooms/Singles" style={{textDecoration: "none"}}>
                        <ListItem button onClick={this.toggleDrawer(false)}>
                            <ListItemIcon>
                                <One />
                            </ListItemIcon>
                            <ListItemText inset primary="Singles" />
                        </ListItem>
                    </Link>

                    <Link to="/Rooms/Doubles" style={{textDecoration: "none"}}>
                        <ListItem button onClick={this.toggleDrawer(false)}>
                            <ListItemIcon>
                                <Two />
                            </ListItemIcon>
                            <ListItemText inset primary="Doubles" />
                        </ListItem>
                    </Link>

                    <Link to="/Rooms/Suites" style={{textDecoration: "none"}}>
                        <ListItem button onClick={this.toggleDrawer(false)}>
                            <ListItemIcon>
                                <Star />
                            </ListItemIcon>
                            <ListItemText inset primary="Suites" />
                        </ListItem>
                    </Link>

                    <Link to="/Rooms/Bungalows" style={{textDecoration: "none"}}>
                        <ListItem button onClick={this.toggleDrawer(false)}>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText inset primary="Bungalows" />
                        </ListItem>
                    </Link>
                </List>
            </Collapse>
        );
        
        
        // SIDEBAR MENU
        const sideList = (
            <List component="nav" style={styles.list} subheader={<ListSubheader component="div">App Menu</ListSubheader>}>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <ListItem button onClick={this.toggleDrawer(false)}>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                </Link>

                <ListItem button onClick={this.handleReservationsMenuClick}>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Reservations" />
                    {this.state.reservationOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                {reservationMenuList}

                
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

    
                <ListItem button onClick={this.logout}>
                    
                    <ListItemText primary="Logout" />
                </ListItem>
            </List>
        );
        
        
        return (
            <div>
                <AppBar position="static" history={this.props.history}>
                    <Toolbar history={this.props.history}>
                        <IconButton onClick={this.toggleDrawer(true)} style={styles.menuButton} aria-label="Menu" color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" style={styles.flex}>
                            <Link to="/" style={{textDecoration: 'none', color: '#fff' }}>Falbek Hotels Management System</Link>
                            
                        </Typography>
                        
                        <Button color="inherit" onClick={this.handleMessage}>
                            <Badge  badgeContent={4} color="secondary">
                                <MailIcon />
                            </Badge>
                        </Button>

                        {
                            this.state.userEmail === 'admin@hotelapp.com' ?
                                <Button>
                                    <Link to="/Admin" style={{color: "white", textDecoration: 'none'}}>
                                        Admin
                                    </Link>
                                </Button>
                                : ''
                        }


                        
                        <Button onClick={this.logout} color="inherit">Logout</Button>
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

    handleMessage = () => {
        alert("Messaging feature coming soon")
    }

    logout = () => {
        this.props.logout(() => {
        })
    }

}


function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
    {logout}
)(MenuDrawer);