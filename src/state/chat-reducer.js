let initialState = {
    msg: [
        {id: 0, userIcon: null, userName: 'Ilyas', msgData: 'Hello!', data: '17:45'},
        {id: 1, userIcon: null, userName: 'Puh', msgData: 'dsfds sdf sdfssd', data: '18:00'}
    ]
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
};

export default chatReducer;