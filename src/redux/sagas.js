import {all} from 'redux-saga/effects';
import authSaga from './auth/saga';
import busSaga from './bus/saga';
import loginSaga from './login/saga';

export default function* rootSaga(getState){
    yield all([
        authSaga(),
        busSaga(),
        loginSaga(),
      ]);
}