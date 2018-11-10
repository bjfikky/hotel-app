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
                    guestName: room.data().guestName,
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
                    empty: room.data().empty,
                    price: room.data().price,
                })
            })

            let reservations = action.payload.reservations

            reservations.forEach(reservation => {
                _.remove(rooms, function(room) {
                    return room.name == reservation.data().room;
                });
            })

            state = state.concat(rooms)

            return state

        case 'ADD_GUEST_TO_ROOM':
            console.log(action.payload.id)

        default: return state;
    }
};

export default rooms;