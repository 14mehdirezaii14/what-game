import { put, takeLatest } from "redux-saga/effects"

import Axios from "../../api/axios"
// let listTime = [{
//     time: 'ساعت 11',
//     price: '105,000 هزار تومان',
//     disable: false
// },
// {
//     time: 'ساعت 13',
//     price: '105,000 هزار تومان',
//     disable: false
// },
// {
//     time: 'ساعت 15',
//     price: '130,000 هزار تومان',
//     disable: false
// },
// {
//     time: 'ساعت 17',
//     price: '130,000 هزار تومان',
//     disable: false
// },
// {
//     time: 'ساعت 19',
//     price: '130,000 هزار تومان',
//     disable: false
// },
// {
//     time: 'ساعت 21',
//     price: '150,000 هزار تومان',
//     disable: false
// },
// {
//     time: 'ساعت 23',
//     price: '150,000 هزار تومان',
//     disable: false
// },
// ]


// <><><><><><><><><><><><><><><><>
function* getSansSaga(action) {
    let listTime = []
    yield Axios.get(`ticket/?date=${action.peyload.date}&idGame=${action.peyload.idProduct}`).then((res) => {
        listTime = res.data
    })
    yield put({ type: "REDUCER_SANS", peyload: listTime })
}

export function* watchGetSans() {
    yield takeLatest("GET_SANS_WATCH", getSansSaga)
}






