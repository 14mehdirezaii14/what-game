import { all, takeLatest, put } from "redux-saga/effects";
import watchGetEscapeRooms from "./getEscapeRoomsSaga";
import watchDisableDate from "./disableDateSaga";
// import watchDisableSans from "./disableSansSaga";
import { watchGetSans } from "./sansSaga";





export function* rootSaga() {
    yield all([
        watchGetEscapeRooms(),
        watchDisableDate(),
        watchGetSans(),
        // watchDisableSans(),
        // watchActiveSans()
    ]);
}