import { createStore } from "redux";
import reservation from "./reducers/reservation";

const store = createStore(reservation)


export default store