import { createStore,compose,applyMiddleware } from "redux";
import reducers from "./reducers";
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]
export function configureStore(initialState) {
  const store = createStore(reducers, initialState,compose(applyMiddleware(...middleware)));
  sagaMiddleware.run(sagas)
  return store;
}
