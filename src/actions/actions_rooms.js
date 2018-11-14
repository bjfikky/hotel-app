import firebase from '../config/firebaseConfig'
import moment from 'moment'

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

    let roomsQuery = firebase.firestore().collection("rooms").orderBy("name").get()


    return (dispatch) => {

        roomsQuery.then(rooms => {
            dispatch({
                type: 'GET_AVAILABLE_ROOMS',
                payload: {
                    rooms: rooms,
                    checkinDate: checkin,
                    checkoutDate: checkout,
                }
            })
            console.log("searching available rooms", checkin , checkout)
            callback()
        })


    }
}


export const getRoomsByDate = (date) => {

    let roomsQuery = firebase.firestore().collection("rooms").orderBy("name").get()

    return (dispatch) => {
        console.log("the date", date)

        roomsQuery.then(rooms => {
            dispatch({
                type: 'GET_ROOMS_BY_DATE',
                payload: {
                    rooms: rooms,
                    date: date
                }
            })
        })

    }

}