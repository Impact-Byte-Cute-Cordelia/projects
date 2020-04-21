import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"

import rootReducer from './Reducers'
import logger from "redux-logger";

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//     }) : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(thunk, logger)
// );

const store = createStore(rootReducer, applyMiddleware(thunk, logger))
// const store = createStore(rootReducer, enhancer)

export default store;