// this file is also called root saga

import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { authUserSaga, authCheckStateSaga } from './auth';
import { initTradingPairsSaga } from './dashboard';
import { purchaseBurgerSaga, fetchOrdersSaga } from './order';

export function* watchAuth() {
    yield all([
        takeEvery(actionTypes.AUTH_USER, authUserSaga),
        takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
    ]);
}

export function* watchDashboard() {
    yield takeEvery(actionTypes.INIT_TRADING_PAIRS, initTradingPairsSaga);
}

export function* watchOrder() {
    yield takeLatest(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga); // if user clicks purchase button multiple times, take only last action
    yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
}
