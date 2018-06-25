import {combineReducers} from 'redux';

import Auth from './reducer_auth';

const rootReducer = combineReducers({
    authenticated: Auth
});

export default rootReducer;