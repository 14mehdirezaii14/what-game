import Axios from "../../api/axios"
import { put, takeLatest } from "redux-saga/effects"

function* getTicketsSaga(action) {
    let newList = []
    yield Axios.get(`ticket/?date=${action.peyload.date}&idGame=${action.peyload.idProduct}`).then((res) => {
        newList = res.data
    })

    yield put({ type: "GET_TICKETS_REDUCER", peyload: newList })
}

function* watchGetTicketsSaga() {
    yield takeLatest("GET_TICKETS_REDUCER_WATCH", getTicketsSaga);
}


export default watchGetTicketsSaga