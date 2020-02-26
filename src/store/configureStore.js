import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";

const configureStore = initialState => {
  const middlewares = [thunk];
  let composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; ///to use react dev tools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(...middlewares))
  );
};

export { configureStore };
