const SET_TEST = 'SET_TEST';

let initialState = {
    msg: [
        {id: 0, userIcon: null, userName: 'Ilyas', msgData: 'Hello!', data: '17:45'},
        {id: 1, userIcon: null, userName: 'Puh', msgData: 'Hi', data: '18:00'}
    ],
    test: '4',
    activeUser: 'Ilyas',
    dialogs: [
        {id: 0, userName: '0'},
        {id: 1, userName: '1'},
        {id: 2, userName: '2'},
        {id: 3, userName: '3'},
        {id: 4, userName: '4'}
    ]
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEST:
            return {
                ...state,
                msg: [ ...state.msg, {id: 0, userIcon: null, userName: 'Ilyas', msgData: action.inputData, data: new Date().getHours() + ':' + new Date().getMinutes()}]
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
