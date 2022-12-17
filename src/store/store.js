import { createStore, combineReducers } from "redux";
import reservation from "./reducers/reservation";
import reservationInformation from "./reducers/reservationInformation";

const store = createStore(combineReducers({
    reservation,
    reservationInformation
}))


export default store