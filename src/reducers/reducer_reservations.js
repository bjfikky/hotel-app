
const reservations = (state = [], action) => {

    switch (action.type) {
        case 'FETCH_RESERVATIONS':
            state = []
            let allReservations = []

            action.payload.forEach(reservation => {
                allReservations.push({
                    id: reservation.id,
                    reserveNum: reservation.id,
                    roomName: reservation.data().room,
                    status: reservation.data().status,
                    guestName: reservation.data().guest.firstName + " " + reservation.data().guest.lastName,
                    checkin: reservation.data().checkinDate,
                    checkout: reservation.data().checkoutDate
                })
            })

            state = state.concat(allReservations)

            return state

        default: return state;
    }
};

export default reservations;