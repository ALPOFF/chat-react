const SET_TEST = 'SET_TEST';
const UPDATE_NEW_SEARCH_VALUE = 'UPDATE_NEW_SEARCH_VALUE';
const GET_NEW_SEARCH_VAL = 'GET_NEW_PIC_ARR';
const CLEAR_SEARCH = 'CLEAR_SEARCH'

let initialState = {
    msg: [
        {id: 0, userIcon: null, userName: 'User 1', msgData: 'Hello!', data: '17:45'},
        {id: 1, userIcon: null, userName: 'User 2', msgData: 'Hi', data: '18:00'}
    ],
    test: '4',
    activeUser: 'User 1',
    dialogs: [
        {id: 0, userName: 'User 1', msgData: 'Hello!'},
        {id: 1, userName: 'rser 2', msgData: 'Hi'},
        {id: 2, userName: 'User 3', msgData: 'fdsfsd'},
        {id: 3, userName: 'User 4', msgData: 'Hsdfsdsdfsdi'},
        {id: 4, userName: 'User 5', msgData: 'Hssssi'}
    ],
    new_search_value: '',
    searchResult: []
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEST:
            return {
                ...state,
                msg: [...state.msg, {
                    id: 0,
                    userIcon: null,
                    userName: 'Ilyas',
                    msgData: action.inputData,
                    data: new Date().getHours() + ':' + new Date().getMinutes()
                }],

            };
        case UPDATE_NEW_SEARCH_VALUE:
            return {
                ...state,
                new_search_value: action.NewSearchValue,
            };
        case GET_NEW_SEARCH_VAL:
            return {
                ...state,
                searchResult: state.dialogs.filter(u => u.userName.includes(state.new_search_value))
            };
        case CLEAR_SEARCH:
            return {
                ...state,
                new_search_value: ''
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

export const update_new_pic_value = (NewSearchValue) => {
    return {
        type: UPDATE_NEW_SEARCH_VALUE,
        NewSearchValue: NewSearchValue
    }
};

export const getNewPicArr = () => {
    return {
        type: GET_NEW_SEARCH_VAL
    }
};

export const clearSearch = () => {
    return {
        type: CLEAR_SEARCH
    }
};

export default chatReducer;
