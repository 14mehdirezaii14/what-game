import Axios from "../../api/axios"
import { put, takeLatest } from "redux-saga/effects"

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


export default watchDisableDate