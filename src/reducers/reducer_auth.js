

const auth = (state = false , action) => {
    
    switch (action.type) {
        case 'LOGIN':
            if (action.payload === undefined) {
                return state
            }

            return true;


        case 'LOGIN_ERROR':
            return false;


        case 'LOGOUT':
            return false;

        case 'SET_TRUE':
            return true;


        default: return state;

    }
};

export default auth;