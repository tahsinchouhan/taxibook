import {all} from 'redux-saga/effects';
import authSaga from './auth/saga';
import busSaga from './bus/saga';
import loginSaga from './login/saga';
import dmpassSaga from './dmpass/saga';
import exploreSaga from './explore/saga';

export default function* rootSaga(getState){
    yield all([
        authSaga(),
        busSaga(),
        loginSaga(),
        dmpassSaga(),
        exploreSaga()
      ]);
}