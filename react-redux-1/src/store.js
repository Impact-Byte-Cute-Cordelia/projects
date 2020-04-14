import { createStore } from "redux";
import Counter from "./reducers/counterReducers";

export default createStore(
  Counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
