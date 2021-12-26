import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
  sagaMiddleware.run(sagas);
  return store;
}
