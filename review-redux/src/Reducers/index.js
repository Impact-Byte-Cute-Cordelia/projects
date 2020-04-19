import { combineReducers } from "redux";
import cakes from "./CakesReducers";
import iceCream from "./IceCreamReducers";

export default combineReducers({ cakes, iceCream });
