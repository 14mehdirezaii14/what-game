import { put, takeLatest } from "redux-saga/effects"



let listTime = [{
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

function* disableSans(action) {
    console.log('disableSans', action)
    yield listTime.map((time) => {
        if (action.peyload === time.time) {
            time.disable = true
        }
    })
    console.log(listTime)
    yield put({ type: "DISABLE_SANS", peyload: listTime })
}

function* watchDisableSans(action) {
    yield takeLatest("DISABLE_SANS_WATCH", disableSans)
}


export default watchDisableSans