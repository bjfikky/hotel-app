import {getRooms} from "../actions/actions_rooms";

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
                    empty: room.data().empty
                })
            })

            state = state.concat(allRooms)

            return state

        case 'GET_AVAILABLE_ROOMS':
            let availableRooms = []

            state = []

            action.payload.rooms.forEach(room => {
                action.payload.reservations.forEach(reservation => {
                    if (room.data().name != reservation.data().room) {
                        availableRooms.push({
                            id: room.id,
                            name: room.data().name,
                            type: room.data().type
                        })
                    }
                })
            })

            state = state.concat(availableRooms)

            return state

        default: return state;
    }
};

export default rooms;