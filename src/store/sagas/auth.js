import { put } from 'redux-saga/effects';

import * as actions from '../actions/index';

export function* authUserSaga(action) {
    yield put(actions.authStart());
    try {
        yield localStorage.setItem('token', true);
        yield put(actions.authSuccess(true));
    } catch (error) {
        yield put(actions.authFail('error during authentication'));
    }
}

export function* authCheckStateSaga(action) {
    const token = yield localStorage.getItem('token');
    if (token) {
        yield put(actions.authSuccess(token));
    }
}
