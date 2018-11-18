import firebase from '../config/firebaseConfig'

export const createUser = (email, password) => {

    console.log(email, password)

    let user = firebase.firestore().collection("users").add({
        email: email,
        password: password
    })

    return (dispatch) => {
        user.then(
            dispatch({
                type: 'CREATE_USER',
                payload: ''
            })
        )
    }
}


export const getUsers = () => {

    let users = firebase.firestore().collection("users").get()

    return (dispatch) => {
        users.then(data => {
            dispatch({
                type: 'GET_USERS',
                payload: data
            })
        })
    }
}