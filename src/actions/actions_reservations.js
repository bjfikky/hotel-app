import firebase from '../config/firebaseConfig'
import reservations from "../reducers/reducer_reservations";


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
            room: reservation.room,
            roomId: reservation.roomId,
            checkinDate: reservation.checkin,
            checkoutDate: reservation.checkout,

            guest: {
                firstName: reservation.firstName,
                lastName: reservation.lastName,
                address: reservation.address,
                city: reservation.city,
                state: reservation.state,
                country: reservation.country,
                email: reservation.email,
                phone: reservation.phone,
                zipCode: reservation.zipCode,
            },

            reservationDate: new Date()

        }).then((data) => {
            firebase.firestore().collection("rooms").doc(reservation.roomId).update({
                reservations: firebase.firestore.FieldValue.arrayUnion(
                    {
                        reservationDate: new Date(),
                        reservationNumber: data.id,
                        checkinDate: reservation.checkin,
                        checkoutDate: reservation.checkout,
                        firstName: reservation.firstName,
                        lastName: reservation.lastName,
                        email: reservation.email,
                        phone: reservation.phone,
                    }
                )
            })

            dispatch({
                type: 'ADD_RESERVATION'
            })
            console.log(data.id)
            callback(data)
        })
    }
}


export const deleteReservation = (id, callback) => {
    console.log("deleting reservation", id)
    let reservationsRef = firebase.firestore().collection("reservations").doc(id).get()


    return (dispatch) => {
        reservationsRef.then(data => {
            let roomId = data.data().roomId
            let reservationNumber  = data.id

            console.log("The room id is", roomId)

            firebase.firestore().collection("rooms").doc(roomId).get().then(room => {
                room.data().reservations.forEach((reservation, index) => {

                    let reservationToBeDeletedFromRoom = {}

                    if (reservation.reservationNumber === reservationNumber) {
                        reservationToBeDeletedFromRoom = reservation

                        console.log(reservationToBeDeletedFromRoom)

                        firebase.firestore().collection("rooms").doc(roomId).update({
                            reservations: firebase.firestore.FieldValue.arrayRemove(reservationToBeDeletedFromRoom)
                        }).then(() => {
                            firebase.firestore().collection("reservations").doc(id).delete().then(() => {
                                dispatch({
                                    type: 'DELETE_RESERVATION',
                                    payload: ''
                                })

                                callback()
                            })
                        })
                    }

                })
            })
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
                guest: {
                    reservationId: data.id,
                    name :data.data().guest.firstName + " " +  data.data().guest.lastName,
                    checkinDate: data.data().checkinDate,
                    checkoutDate: data.data().checkoutDate,
                }
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
                guest: firebase.firestore.FieldValue.delete()
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