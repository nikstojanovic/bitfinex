// this file is also called root saga

import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { authUserSaga } from './auth';
import { initTradingPairsSaga } from './dashboard';
import { initPairDetailsSaga } from './pairDetails';

export function* watchAuth() {
    yield all([
        takeEvery(actionTypes.AUTH_USER, authUserSaga),
    ]);
}

export function* watchDashboard() {
    yield takeEvery(actionTypes.INIT_TRADING_PAIRS, initTradingPairsSaga);
}

export function* watchPairDetails() {
    yield takeLatest(actionTypes.INIT_PAIR_DETAILS, initPairDetailsSaga);
}
