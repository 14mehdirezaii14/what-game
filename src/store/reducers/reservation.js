function reservation(state = { step: 2 }, action) {
    switch (action.type) {
        case 'step1':
            return { step: state.step + 1 }
        case 'counter/decremented':
            return { value: state.value - 1 }
        default:
            return state
    }
}

export default reservation