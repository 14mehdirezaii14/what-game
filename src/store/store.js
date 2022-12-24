import { createStore, combineReducers } from "redux";
import reservation from "./reducers/reservation";
import reservationInformation from "./reducers/reservationInformation";

const store = createStore(combineReducers({
    reservation,
    reservationInformation
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store