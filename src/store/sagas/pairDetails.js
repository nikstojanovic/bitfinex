import { put } from 'redux-saga/effects';

import endpoints from '../../configuration/endpoints';
import axios from '../../configuration/axiosOrders';
import * as actions from '../actions';

export function* initPairDetailsSaga(action) {
    const symbol = action.pairId;

    yield put(actions.fetchPairDetailsStart());

    try {
        const response = yield axios.get(endpoints.GET_TRADING_PAIR_DETAILS.replace(':symbol', symbol));
        yield put(actions.fetchPairDetailsSuccess(response.data));
    } catch (error) {
        yield put(actions.fetchPairDetailsFail(error))
        yield put(actions.globalError(error))
    }
}
