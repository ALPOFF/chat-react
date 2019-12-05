import {combineReducers, createStore} from "redux";
import chatReducer from "./state/chat-reducer";

let reducers = combineReducers({
    chatReducer
})

let store = createStore(reducers);

window.store = store;

export default store