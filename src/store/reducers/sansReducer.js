function SansReducer(state = [], action) {
    switch (action.type) {
        case 'DISABLE_SANS':
            return action.peyload
        default:
            return [{
                    time: 'ساعت 11',
                    price: '105,000 هزار تومان',
                    disable: false
                },
                {
                    time: 'ساعت 13',
                    price: '105,000 هزار تومان',
                    disable: false
                },
                {
                    time: 'ساعت 15',
                    price: '130,000 هزار تومان',
                    disable: false
                },
                {
                    time: 'ساعت 17',
                    price: '130,000 هزار تومان',
                    disable: false
                },
                {
                    time: 'ساعت 19',
                    price: '130,000 هزار تومان',
                    disable: false
                },
                {
                    time: 'ساعت 21',
                    price: '150,000 هزار تومان',
                    disable: false
                },
                {
                    time: 'ساعت 23',
                    price: '150,000 هزار تومان',
                    disable: false
                },
            ]
    }
}

export default SansReducer