import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
// import logger from "redux-logger";

import rootReducer from './Reducers'

// UNTUK MENGAKTIFKAN REDUX DEV TOOL
// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//     }) : compose;
//
// const enhancer = composeEnhancers(
//   applyMiddleware(thunk, logger)
// );
//
// const store = createStore(rootReducer, enhancer)

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;