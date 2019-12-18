import {getDialog, getDialogsList, getUsersData} from "../api/api";

const SET_TEST = 'SET_TEST';
const UPDATE_NEW_SEARCH_VALUE = 'UPDATE_NEW_SEARCH_VALUE';
const GET_NEW_SEARCH_VAL = 'GET_NEW_PIC_ARR';
const CLEAR_SEARCH = 'CLEAR_SEARCH';
const SET_CURRENT_DIALOG = 'SET_CURRENT_DIALOG';
const SET_DIALOGS_LIST = 'SET_DIALOGS_LIST'

let initialState = {

    test: '4',
    activeUser: 2,

    //users Data
    dialogs: [
        {
            id: 0, userName: 'User 0', msgData: 'dfsfsdf', msg: [
                {id: 0, msgData: 'Hello!', data: '17:45', userIcon: null, userName: 'User 0'},
                {id: 2, msgData: 'Dfdsf', data: '14:00', userIcon: null, userName: 'User 2'},
                {id: 0, msgData: 'FDds', data: '12:00', userIcon: null, userName: 'User 0'},
                {id: 2, msgData: 'Dfsd', data: '13:00', userIcon: null, userName: 'User 2'},
                {id: 0, msgData: 'F dsfsd', data: '11:00', userIcon: null, userName: 'User 0'}
            ]
        },
        {
            id: 1, userName: 'User 1', msgData: 'bnmbnmbnm', msg: [
                {id: 0, msgData: 'sdfsdfsd!', data: '17:45', userIcon: null, userName: 'User 0'},
                {id: 1, msgData: 'zcsxcv', data: '14:00', userIcon: null, userName: 'User 1'},
                {id: 0, msgData: 'qweqweqw', data: '12:00', userIcon: null, userName: 'User 0'},
                {id: 1, msgData: 'rtgeter', data: '13:00', userIcon: null, userName: 'User 1'},
                {id: 0, msgData: 'F werwerwe', data: '11:00', userIcon: null, userName: 'User 0'}
            ]
        },
        {id: 2, userName: 'User 2', userIcon: null, msgData: 'cvbcvb'},
        {id: 3, userName: 'User 3', userIcon: null, msgData: 'sdfsdf'},
        {id: 4, userName: 'User 4', userIcon: null, msgData: 'umvvghf'}
    ],

    new_search_value: '',
    searchResult: [],
    text: '',
    dialogsList: [],
    dialogId: null,
    msg: []
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEST:
            return {
                ...state,
                msg: [...state.msg, {
                    id: 0,
                    userIcon: null,
                    userName: 'User 0',
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
                searchResult: state.dialogsList.filter(u => u.lastMsg.userName.includes(state.new_search_value) || u.lastMsg.text.includes(state.new_search_value))
            };
        case CLEAR_SEARCH:
            return {
                ...state,
                new_search_value: ''
            };
        case SET_CURRENT_DIALOG:
            return {
                ...state,
                dialogId: action.dialogId,
                msg: action.msg
            };
        case SET_DIALOGS_LIST:
            return {
                ...state,
                dialogsList: action.dialogsList
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

const setCurrentDialog = (dialogId, msg) => {
    return {
        type: SET_CURRENT_DIALOG,
        dialogId,
        msg
    }
};

const setDialogsList = (dialogsList) => {
    return {
        type: SET_DIALOGS_LIST,
        dialogsList
    }
};

export const getDialogs = () => async (dispatch) => {
    let response = await getUsersData();
    console.log(response.data)
};

export const getDialogData = (dialogId) => async (dispatch) => {
    let response = await getDialog(dialogId);
    console.log(response.data)
    dispatch(setCurrentDialog(response.data[0].dialogId, response.data[0].msg))
};

export const getDialogsListData = () => async (dispatch) => {
    let response = await getDialogsList();
    console.log(response.data)
    dispatch(setDialogsList(response.data))
};

export default chatReducer;
