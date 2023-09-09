import { combineReducers, createStore } from "redux";
import lengthReducer from "./reducers/lengthReducer";
import timerReducer from "./reducers/timerReducer";

const rootReducer = combineReducers({
    length: lengthReducer,
    timer: timerReducer
})

const store = createStore(rootReducer)

export default store;