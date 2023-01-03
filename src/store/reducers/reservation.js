function reservation(state = { step: 1 }, action) {
    switch (action.type) {
        case 'step0':
            return { step: 1 }
        case 'step1':
            return { step: 2 }
        case 'step2':
            return { step: 3 }
        case 'step3':
            return { step: 4 }
        default:
            return state
    }
}

export default reservation