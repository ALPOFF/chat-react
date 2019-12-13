const SET_TEST = 'SET_TEST';

let initialState = {
    msg: [
        {id: 0, userIcon: null, userName: 'User 1', msgData: 'Hello!', data: '17:45'},
        {id: 1, userIcon: null, userName: 'User 2', msgData: 'Hi', data: '18:00'}
    ],
    test: '4',
    activeUser: 'User 1',
    dialogs: [
        {id: 0, userName: 'User 1', msgData: 'Hello!'},
        {id: 1, userName: 'User 2', msgData: 'Hi'},
        {id: 2, userName: 'User 3', msgData: 'fdsfsd'},
        {id: 3, userName: 'User 4', msgData: 'Hsdfsdsdfsdi'},
        {id: 4, userName: 'User 5', msgData: 'Hssssi'}
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
