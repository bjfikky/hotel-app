import firebase from '../config/firebaseConfig'

export const getRooms = () => {

    let roomsQuery = firebase.firestore().collection("rooms").orderBy("name").get()

    return (dispatch) => {
        roomsQuery.then((data) => {
            dispatch({
                type: 'GET_ROOMS',
                payload: data
            })
        })
    }
}

export const getAvailableRooms = (checkin, checkout, callback) => {
// TODO: Make reservation query use dates passed in
    let roomsQuery = firebase.firestore().collection("rooms").orderBy("name").get()




    return (dispatch) => {

        roomsQuery.then(rooms => {
            dispatch({
                type: 'GET_AVAILABLE_ROOMS',
                payload: {
                    rooms: rooms
                }
            })
            console.log("searching available rooms", checkin , checkout)
            callback()
        })


    }
}


export const getRoomsByDate = (type, date) => {
    let reservationQuery = firebase.firestore().collection("reservations").get()
    let roomsQuery = firebase.firestore().collection("rooms").orderBy("name").get()

    return (dispatch) => {
        reservationQuery.then(reservations => {
            roomsQuery.then(rooms => {
                dispatch({
                    type: 'GET_BY_DATE',
                    payload: {
                        reservations: reservations,
                        rooms: rooms,
                        type: type,
                        date: date
                    }
                })
            })
        })
    }
}