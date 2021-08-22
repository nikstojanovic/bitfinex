import { put } from 'redux-saga/effects';

import axios from '../../configuration/axiosOrders';
import * as actions from '../actions';

export function* initTradingPairsSaga(action) {
    try {
        const response = yield axios.get('/v1/symbols');
        const tradingPairs = response.data.slice(0, 5);
        yield put(actions.setTradingPairs(tradingPairs));
    } catch (error) {
        yield put(actions.fetchTradingPairsFailed())
    }
}
