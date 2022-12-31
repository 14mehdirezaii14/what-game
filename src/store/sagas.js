import { all, put, takeLatest } from "redux-saga/effects";
import Axios from '../api/axios'


function* getEscapeRooms() {
    let data = []
    yield Axios.get('/EscapeRoomGet/').then((res) => {
        data = res.data
    })
    yield put({ type: 'SET_ESCAPE_ROOMS', peyload: data })

}

function* watchGetEscapeRooms() {
    yield takeLatest("GET_ESCAPE_ROOMS", getEscapeRooms);
}

// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

function* disableDate(action) {
    let disableList = []
    yield Axios.get(`getDisableDate/?idGame=${action.peyload.idProduct}`).then((res) => {
        if (res.data.length > 0) {
            disableList = res.data
        }
    })

    yield put({ type: "SET_DISABLE_DATE", peyload: disableList })
}

function* watchDisableDate() {
    yield takeLatest("DISABLE_DATE_WATCH", disableDate);
}


// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

function* getTicketsSaga(action) {
    let newList = []
    console.log(action)
    yield Axios.get(`ticket/?date=${action.peyload.date}&idGame=${action.peyload.idProduct}`).then((res) => {
        newList = res.data
    })

    yield put({ type: "GET_TICKETS_REDUCER", peyload: newList })
}

function* watchGetTicketsSaga() {
    yield takeLatest("GET_TICKETS_REDUCER_WATCH", getTicketsSaga);
}

// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

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

// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
function* activeSans() {
    console.log('activeSans')
    yield listTime.map((time) => {
        time.disable = false
    })
    yield put({
        type: "DISABLE_SANS",
        peyload: [{
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
    })
}

function* watchActiveSans() {
    yield takeLatest("ACTIVE_SANS_WATCH", activeSans)
}





export function* rootSaga() {
    yield all([watchGetEscapeRooms(), watchDisableDate(), watchGetTicketsSaga(), watchDisableSans(), watchActiveSans()]);
}