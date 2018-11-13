


const auth = (state = true, action) => {
    
    switch (action.type) {
        case 'LOGIN':

            if (action.payload.error) {
                state = false
            } else {
                state = true
            }

            return state


        case 'LOGOUT':
            state = false

            return state


        default: return state;

    }
};

export default auth;