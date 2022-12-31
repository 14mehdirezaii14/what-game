function SansReducer(state = [], action) {
    switch (action.type) {
        case 'DISABLE_SANS':
            console.log(action)
            return action.peyload
        default:
            return state
    }
}

export default SansReducer