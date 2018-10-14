import {combineReducers} from 'redux';

import Auth from './reducer_auth';
import Rooms from './reducer_rooms'

const rootReducer = combineReducers({
    authenticated: Auth,
    rooms: Rooms
});

export default rootReducer;