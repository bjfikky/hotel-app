import {combineReducers} from 'redux';

import Auth from './reducer_auth';
import Rooms from './reducer_rooms'
import Reservations from './reducer_reservations'
import Reservation from './reducer_reservation'


const rootReducer = combineReducers({
    auth: Auth,
    rooms: Rooms,
    reservations: Reservations,
    reservation: Reservation,
});

export default rootReducer;