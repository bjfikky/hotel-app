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
            console.log("getting reservation")
        })
    }
}


export const addReservation = (reservation, callback) => {
    let reservationsRef = firebase.firestore().collection("reservations")

    return (dispatch) => {
        reservationsRef.add({
            checkedIn: false,
            room: reservation.room,
            roomId: reservation.roomId,
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


export const checkinReservation = (id, callback) => {

    let reservation = firebase.firestore().collection("reservations").doc(id).get()

    firebase.firestore().collection("reservations").doc(id).set({
        status : 'CHECKED IN'
    }, {merge : true}).catch(error => { alert(error.message)})


    return (dispatch) => {
        reservation.then((data) => {
            firebase.firestore().collection("rooms").doc(data.data().roomId).set({
                guestName : data.data().guest.firstName + " " +  data.data().guest.lastName
            }, {merge : true})

            dispatch({
                type: 'CHECKIN_RESERVATION',
            })
            callback()

        })
    }
}


export const checkoutReservation = (id, callback) => {
    let reservation = firebase.firestore().collection("reservations").doc(id).get()

    firebase.firestore().collection("reservations").doc(id).set({
        status : 'CHECKED OUT'
    }, {merge : true})

    return (dispatch) => {
        reservation.then((data) => {
            firebase.firestore().collection("rooms").doc(data.data().roomId).update({
                guestName: firebase.firestore.FieldValue.delete()
            })

            dispatch({
                type: 'CHECKOUT_RESERVATION',
                payload: data
            })
            callback()
        })
    }
}


export const searchReservation = (confirmationNumber, callback) => {
    let reservationsQuery = firebase.firestore().collection("reservations").doc(confirmationNumber).get().catch(error => {
        alert(error.message)
        return
    })

    console.log("from action", confirmationNumber)

    return (dispatch) => {
        reservationsQuery.then(data => {
            dispatch({
                type: 'SEARCH_RESERVATION',
                payload: data
            })
            callback()
        })
    }
}