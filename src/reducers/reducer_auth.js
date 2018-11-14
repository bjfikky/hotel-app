

const auth = (state = true , action) => {
    
    switch (action.type) {
        case 'LOGIN':
            if (action.payload === undefined) {
                return state
            }

            return true;


        case 'LOGIN_ERROR':
            return false


        case 'LOGOUT':
            return false


        default: return state;

    }
};

export default auth;