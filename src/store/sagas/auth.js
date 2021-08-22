import { put } from 'redux-saga/effects';

import * as actions from '../actions/index';

export function* authUserSaga(action) {
    yield put(actions.authStart());
    
    try {
        yield localStorage.setItem('token', true);
        yield put(actions.authSuccess(true));
    } catch (error) {
        yield put(actions.authFail('Error during authentication'));
        yield put(actions.globalError('Error during authentication'));
    }
}
