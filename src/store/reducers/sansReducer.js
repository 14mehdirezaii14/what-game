function SansReducer(state = [], action) {
    switch (action.type) {
        case 'REDUCER_SANS':
            return action.peyload
        default:
            return state
    }
}

export default SansReducer