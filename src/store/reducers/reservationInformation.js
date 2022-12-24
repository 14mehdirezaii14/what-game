let form = {
    nameGame: '',
    price: '',
    date: '',
    timee: '',
    numberOfPersons: '',
    name: '',
    lastName: '',
    email: '',
    phone: ''
}

function reservationInformation(state = form, action) {
    switch (action.type) {
        case 'setPrice':
            form.price = action.peyload.price
            return form
        case 'setDate':
            form.date = action.peyload.date
            form.timee = action.peyload.timee
            form.numberOfPersons = action.peyload.numberOfPersons
            return form
        case 'UserProfile':
            form.name = action.peyload.name
            form.lastName = action.peyload.lastName
            form.email = action.peyload.email
            form.phone = action.peyload.phone
            return form
        case 'nameGame':
            form.nameGame = action.peyload.nameGame
            return form

        default:
            return state
    }
}

export default reservationInformation