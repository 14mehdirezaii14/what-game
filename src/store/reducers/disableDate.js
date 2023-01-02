let disableList = []

function disableDate(state = disableList, action) {
    switch (action.type) {
        case "SET_DISABLE_DATE":
            disableList = action.peyload
            return disableList
        default:
            return disableList
    }
}

export default disableDate