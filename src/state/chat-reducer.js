const SET_TEST = 'SET_TEST';

let initialState = {
    msg: [
        {id: 0, userIcon: null, userName: 'Ilyas', msgData: 'Hello!', data: '17:45'},
        {id: 1, userIcon: null, userName: 'Puh', msgData: 'dsfds sdf sdfssd', data: '18:00'}
    ],
    test: '4'
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEST:
            return {
                ...state,
                test: action.inputData
            };
        default:
            return state
    }
};

export const setTest = (inputData) => {
    return {
        type: SET_TEST,
        inputData
    }
};

export default chatReducer;
