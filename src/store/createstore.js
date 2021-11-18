import {applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducers";
import {createStore} from "redux";
const thunkMiddleWare = applyMiddleware(thunk, logger);
const enhancers = thunkMiddleWare;

const createdStore = (state = {}) => {
  let store = null;
  store = createStore(reducers, state, enhancers);
  return store;
};

export default createdStore;
