export const START_TIMER = 'START_TIMER'
export const STOP_TIMER = 'STOP_TIMER'
export const RESET_TIMER = 'RESET_TIMER'
export const UPDATE_TIMER = 'UPDATE_TIMER'

const initialState = {
    isRunning: false,
    timeLeft: 1500
}

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_TIMER:
            return {
                ...state,
                isRunning: true
            }
        case STOP_TIMER:
            return {
                ...state,
                isRunning: false
            }
        case RESET_TIMER:
            return {
                ...state, 
                timeLeft: action.payload, 
                isRunning: false
            }
        case UPDATE_TIMER:
            return {
                ...state,
                timeLeft: action.payload
            }
        default: 
            return state;
    }
}

export default timerReducer
