import { START_TIMER, STOP_TIMER, RESET_TIMER, UPDATE_TIMER } from "../reducers/timerReducer"

export const startTimer = () => ({
    type: START_TIMER
})

export const stopTimer = () => ({
    type: STOP_TIMER
})

export const resetTimer = (timeInSeconds) => ({
    type: RESET_TIMER,
    payload: timeInSeconds
})

export const updateTimer = (newTime) => ({
    type: UPDATE_TIMER,
    payload: newTime
})
