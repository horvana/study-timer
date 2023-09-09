export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

const initialState = {
    breakLength: 5,
    sessionLength: 25,
}

const lengthReducer = (state = initialState, action) => {
    const timerType = action.payload
    const max = 60
    const min = 1

    switch (action.type) {
        case INCREMENT:
            return {
                ...state, 
                [`${timerType}Length`]: Math.min(state[`${timerType}Length`] + 1, max)
            }
            case DECREMENT:
                return {
                    ...state,
                    [`${timerType}Length`]: Math.max(state[`${timerType}Length`] - 1, min)
                }
            default: 
                return state;

    }
}

export default lengthReducer