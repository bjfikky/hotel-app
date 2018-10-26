

const rooms = (state = [], action) => {

    switch (action.type) {
        case 'FETCH_ROOMS':
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

        default: return state;
    }
};

export default rooms;