import {applyMiddleware, combineReducers, createStore} from "redux";
import { reducer as formReducer } from 'redux-form'
import chatReducer from "./state/chat-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    chatReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store
