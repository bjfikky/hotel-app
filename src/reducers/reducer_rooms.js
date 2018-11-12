import _ from 'lodash'

const rooms = (state = [], action) => {

    switch (action.type) {
        case 'GET_ROOMS':
            let allRooms = [];

            state = []

            action.payload.forEach(room => {
                allRooms.push({
                    id: room.id,
                    name: room.data().name,
                    type: room.data().type,
                    guest: room.data().guest,
                    price: room.data().price,
                })
            })

            state = state.concat(allRooms)

            return state

        case 'GET_AVAILABLE_ROOMS':
            let rooms = []

            state = []

            action.payload.rooms.forEach(room => {
                rooms.push({
                    id: room.id,
                    name: room.data().name,
                    type: room.data().type,
                    price: room.data().price,
                })
            })

            let reservations = action.payload.reservations

            reservations.forEach(reservation => {
                _.remove(rooms, function(room) {
                    if (room.reservations) {
                        for (let i = 0; i < room.reservations.length; i++) {
                            console.log("here")
                            return room.name === reservation.data().room & room.reservations[i].checkinDate === "11/22/2018";
                        }
                    }
                    return room.name === reservation.data().room;
                });
            })

            state = state.concat(rooms)

            return state

        case 'ADD_GUEST_TO_ROOM':
            console.log(action.payload.id)
            break

        case 'GET_BY_DATE':
            state = []

            let date = action.payload.date
            let roomsgbd = []
            let reservationsgbd = action.payload.reservations
            let type = action.payload.type

            action.payload.rooms.forEach(room => {
                roomsgbd.push({
                    id: room.id,
                    name: room.data().name,
                    type: room.data().type,
                    price: room.data().price,
                })
            })

            reservationsgbd.forEach(reservation => {
                _.remove(roomsgbd, function(room) {
                    return room.name === reservation.data().room & reservation.data().checkinDate === date;
                });
            })
            console.log(roomsgbd)


        default: return state;
    }
};

export default rooms;