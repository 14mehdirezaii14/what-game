import { createStore, combineReducers, applyMiddleware } from "redux";
import reservation from "./reducers/reservation";
import reservationInformation from "./reducers/reservationInformation";
import escapeRoomsReducer from "./reducers/escapeRoomsReducer";
import disableDate from "./reducers/disableDate";
import getTicketsReducer from "./reducers/getTicketsReducer";
import SansReducer from "./reducers/sansReducer";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import { rootSaga } from "./sagas";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers({ reservation, reservationInformation, escapeRoomsReducer, disableDate, getTicketsReducer, SansReducer }),
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);


export default store