import {combineReducers} from 'redux';

import Auth from './reducer_auth';
import Rooms from './reducer_rooms'
import Reservations from './reducer_reservations'

const rootReducer = combineReducers({
    authenticated: Auth,
    rooms: Rooms,
    reservations: Reservations
});

export default rootReducer;