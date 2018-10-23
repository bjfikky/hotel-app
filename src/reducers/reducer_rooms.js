
let allRooms = [
    {
        'id': 1,
        'type': 'single',
        'name': '101SG',
        'empty': true,
    },
    {
        'id': 2,
        'type': 'single',
        'name': '102SG',
        'empty': false,
    },
    {
        'id': 3,
        'type': 'single',
        'name': '103SG',
        'empty': true,
    },
    {
        'id': 4,
        'type': 'single',
        'name': '104SG',
        'empty': false,
    },
    {
        'id': 5,
        'type': 'single',
        'name': '105SG',
        'empty': false,
    },
    {
        'id': 6,
        'type': 'double',
        'name': '106DB',
        'empty': false,
    },
    {
        'id': 7,
        'type': 'double',
        'name': '107DB',
        'empty': false,
    },
    {
        'id': 8,
        'type': 'double',
        'name': '108DB',
        'empty': false,
    }
    ,{
        'id': 9,
        'type': 'double',
        'name': '109DB',
        'empty': false,
    },
    {
        'id': 10,
        'type': 'double',
        'name': '110DB',
        'empty': false,
    },


]

const rooms = (state = allRooms, action) => {

    switch (action.type) {

        default: return state;
    }
};

export default rooms;