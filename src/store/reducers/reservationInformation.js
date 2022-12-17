let form = {
    date: '',
    time: '',
    numberOfPeople: '',
    name: '',
    lastName: '',
    email: '',
    phone: ''
}

function reservationInformation(state = form, action) {
    switch (action.type) {
        case 'setDate':
            form.date = action.peyload.date
            form.time = action.peyload.time
            form.numberOfPeople = action.peyload.numberOfPeople
            return form
        case 'UserProfile':
            form.name = action.peyload.name
            form.lastName = action.peyload.lastName
            form.email = action.peyload.email
            form.phone = action.peyload.phone
            return form
        default:
            return state
    }
}

export default reservationInformation