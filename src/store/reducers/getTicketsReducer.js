let ticketsList = []

function getTicketsReducer(state = ticketsList, action) {
    switch (action.type) {
        case "GET_TICKETS_REDUCER":
            ticketsList = action.peyload
            return ticketsList
        default:
            return ticketsList
    }
}

export default getTicketsReducer