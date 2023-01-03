import { createStore, combineReducers, applyMiddleware } from "redux";
import reservation from "./reducers/reservation";
import reservationInformation from "./reducers/reservationInformation";
import escapeRoomsReducer from "./reducers/escapeRoomsReducer";
import disableDate from "./reducers/disableDate";
import getTicketsReducer from "./reducers/getTicketsReducer";
import SansReducer from "./reducers/sansReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/rootSagas";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers({
        reservationInformation,
        escapeRoomsReducer,
        reservation,
        disableDate,
        SansReducer
    }),

    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga);


export default store