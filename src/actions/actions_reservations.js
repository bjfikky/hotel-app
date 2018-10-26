import firebase from '../config/firebaseConfig'


export const getReservations = () => {
    let reservationsQuery = firebase.firestore().collection("reservations").get()

    return (dispatch) => {
        reservationsQuery.then((data) => {
            dispatch({
                type: 'FETCH_RESERVATIONS',
                payload: data
            })
        })
    }
}