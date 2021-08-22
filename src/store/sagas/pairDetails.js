import { put } from 'redux-saga/effects';

import config from '../../configuration/config';
import axios from '../../configuration/axiosOrders';
import * as actions from '../actions';

export function* initPairDetailsSaga(action) {
    const symbol = action.pairId;
    const endpoint = config.ENDPOINTS.GET_TRADING_PAIR_DETAILS.replace(':symbol', symbol);
    
    yield put(actions.fetchPairDetailsStart());

    try {
        const response = yield axios.get(endpoint);
        yield put(actions.fetchPairDetailsSuccess(response.data));
    } catch (error) {
        yield put(actions.fetchPairDetailsFail())
    }
}
