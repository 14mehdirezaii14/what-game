import Axios from "../../api/axios"
import { put, takeLatest } from "redux-saga/effects"

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



export default watchGetEscapeRooms