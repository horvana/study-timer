import { INCREMENT, DECREMENT } from "../reducers/lengthReducer"

export const incrementLength = (timerType) => ({
    type: INCREMENT,
    payload: timerType
})

export const decrementLength = (timerType) => ({
    type: DECREMENT,
    payload: timerType
})

