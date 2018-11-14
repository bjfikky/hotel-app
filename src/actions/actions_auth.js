import firebase from '../config/firebaseConfig'

export const login = (email, password, callback) => {
    let auth = firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
        alert(error)

        return (dispatch) => {
            auth.then(() => {
                dispatch({
                    type: 'LOGIN_ERROR',
                    payload: error
                })

            })
        }
    })



    return (dispatch) => {
        auth.then((data) => {
            console.log(data.user)
            dispatch({
                type: 'LOGIN',
                payload: data.user
            })

            callback()
        })
    }
}



export const logout = (callback) => {
    console.log("logging out")
    let auth = firebase.auth().signOut().catch(error => {
        alert(error)

        return {
            error: error.message
        }
    })

    return (dispatch) => {
        auth.then(() => {
            dispatch({
                type: 'LOGOUT',
            })

            callback()
        })
    }
}
