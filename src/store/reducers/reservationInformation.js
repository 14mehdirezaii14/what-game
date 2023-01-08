let form = {
    idGame: '',
    nameGame: '',
    price: '',
    date: '',
    timee: 'انتخاب سانس',
    numberOfPersons: 'انتخاب نفرات',
    name: '',
    lastName: '',
    email: '',
    phone: ''
}

function reservationInformation(state = form, action) {
    switch (action.type) {
        case 'setPrice':
            console.log(action)
            form.price = action.peyload.price
            console.log(form)
            return form
        case 'setDate':
            form.date = action.peyload.date
            return form
        case 'setTimee':
            form.timee = action.peyload.timee
            return form
        case 'setNumberOfPersons':
            form.numberOfPersons = action.peyload.numberOfPersons
            console.log(form)
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
        case 'idGame':
            form.idGame = action.peyload.idGame
            return form

        default:
            return state
    }
}

export default reservationInformation