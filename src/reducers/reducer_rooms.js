
let allRooms = [
    {
        'type': 'Single',
        'name': '100SG',
        'empty': true,
    },
    {
        'type': 'Single',
        'name': '101SG',
        'empty': false,
    },
    {
        'type': 'Single',
        'name': '102SG',
        'empty': true,
    },
    {
        'type': 'Single',
        'name': '103SG',
        'empty': false,
    },
]

const rooms = (state = allRooms, action) => {

    switch (action.type) {

        default: return state;
    }
};

export default rooms;