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
        // let newList = [];
        // if (res.data.length > 0) {
        //     res.data.map((item) => {
        //         newList.push(listTime.filter((time) => {
        //             if (item.timee === time.time) {
        //                 time.disable = true
        //             }
        //             return item

        //         }))
        //     })
        //     console.log(newList)
        //     setListTime(newList[0])
        // }
        newList = res.data


    })

    yield put({ type: "GET_TICKETS_REDUCER", peyload: newList })
}

function* watchGetTicketsSaga() {
    yield takeLatest("GET_TICKETS_REDUCER_WATCH", getTicketsSaga);
}


export function* rootSaga() {
    yield all([watchGetEscapeRooms(), watchDisableDate(), watchGetTicketsSaga()]);
}