const reservation = (state = [], action) => {

    switch (action.type) {
        case 'GET_RESERVATION':
            let data = action.payload

            state = []

            let reservation = {
                id: data.id,
                room: data.data().room,
                status : data.data().status,
                checkin: data.data().checkinDate,
                checkout: data.data().checkoutDate,
                clerkEmail: data.data().clerkEmail,

                firstName: data.data().guest.firstName,
                lastName: data.data().guest.lastName,
                email: data.data().guest.email,
                phone: data.data().guest.phone,
                address: data.data().guest.address,
                city: data.data().guest.city,
                zipCode: data.data().guest.zipCode,
                phone: data.data().guest.phone,
                country: data.data().guest.country,
            }

            state = reservation

            return state

        case 'CHECKIN_RESERVATIONS':


        default: return state;
    }
};

export default reservation;