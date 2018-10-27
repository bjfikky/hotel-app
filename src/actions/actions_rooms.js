import firebase from '../config/firebaseConfig'

export const getRooms = () => {

    let roomsQuery = firebase.firestore().collection("rooms").orderBy("name").get()

    return (dispatch) => {
        roomsQuery.then((data) => {
            dispatch({
                type: 'FETCH_ROOMS',
                payload: data
            })
        })
    }
}

export const getAvailableRooms = (checkin, checkout) => {
    console.log("searching available rooms", checkin , checkout)

    return (dispatch) => {

    }
}
