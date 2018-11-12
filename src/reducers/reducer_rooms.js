import _ from 'lodash'
import moment from 'moment'
import range from 'moment-range'

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

            let allrooms =  []

            let format = "MM/DD/YYYY"

            let checkinDate = moment(action.payload.checkinDate).format('L')
            let checkoutDate = moment(action.payload.checkoutDate).format('L')

            let range = moment().is



            state = []


            action.payload.rooms.forEach(room => {
                allrooms.push({
                    id: room.id,
                    name: room.data().name,
                    reservations: room.data().reservations,
                    type: room.data().type,
                    price: room.data().price,
                })
            })

            action.payload.rooms.forEach(room => {
                for (let i = 0; i < room.data().reservations.length; i++) {
                    if ( moment(room.data().reservations[i].checkinDate, format).isBetween( moment(checkinDate, format), moment(checkoutDate, format) ) ||
                        moment(room.data().reservations[i].checkoutDate, format).isBetween( moment(checkinDate, format), moment(checkoutDate, format) ) ||
                        (room.data().reservations[i].checkinDate === checkinDate & room.data().reservations[i].checkoutDate === checkoutDate)
                    ) {
                        rooms.push({
                            id: room.id,
                            name: room.data().name,
                            reservations: room.data().reservations,
                            type: room.data().type,
                            price: room.data().price,
                        })
                    }
                }

                // if (room.data().reservations.length === 0) {
                //     rooms.push({
                //         id: room.id,
                //         name: room.data().name,
                //         reservations: room.data().reservations,
                //         type: room.data().type,
                //         price: room.data().price,
                //     })
                //
                //
                // }

            })

            rooms.forEach(room => {
                _.remove(allrooms, function (n) {
                    return n.name === room.name
                })
            })


            console.log(rooms)
            console.log(allrooms)


            state = state.concat(allrooms)

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