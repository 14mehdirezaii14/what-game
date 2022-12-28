let form = []


function escapeRoomsReducer(state = form, action) {
    switch (action.type) {
        case 'SET_ESCAPE_ROOMS':
            console.log(action.peyload)
            form = action.peyload
            return form
        default:
            return form
    }
}

export default escapeRoomsReducer