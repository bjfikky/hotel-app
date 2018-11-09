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


export const getReservation = (id) => {
    let reservationRef = firebase.firestore().collection("reservations").doc(id).get()

    return (dispatch) => {
        reservationRef.then((data) => {
            dispatch({
                type: 'GET_RESERVATION',
                payload: data
            })
        })
    }
}


export const addReservation = (reservation, callback) => {
    let reservationsRef = firebase.firestore().collection("reservations")

    return (dispatch) => {
        reservationsRef.add({
            checkedIn: false,
            room: reservation.room,
            checkinDate: reservation.checkin,
            checkoutDate: reservation.checkout,

            guest: {
                firstName: reservation.firstName,
                lastName: reservation.lastName,
                address: reservation.address,
                city: reservation.city,
                country: reservation.country,
                email: reservation.email,
                phone: reservation.phone,
                zipCode: reservation.zipCode,
            },

            reservationDate: new Date()

        }).then((data) => {
            dispatch({
                type: 'ADD_RESERVATION'
            })
            console.log(data.id)
            callback(data)
        })
    }
}