function SansReducer(state = [], action) {
    switch (action.type) {
        case 'REDUCER_SANS':
            return action.peyload
        case 'ALL_DISABLE_SANS_':
            return "DISABLE"
        default:
            return state
    }
}

export default SansReducer