import firebase from '../config/firebaseConfig'

export const getRooms = () => {
    console.log("action performed")

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
