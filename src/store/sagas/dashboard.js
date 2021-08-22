import { put } from 'redux-saga/effects';

import config from '../../configuration/config';
import axios from '../../configuration/axiosOrders';
import * as actions from '../actions';

export function* initTradingPairsSaga(action) {
    const endpoint = config.ENDPOINTS.GET_TRAING_PAIRS;
    
    try {
        const response = yield axios.get(endpoint);
        const tradingPairs = response.data.slice(0, 5);
        yield put(actions.setTradingPairs(tradingPairs));
    } catch (error) {
        yield put(actions.fetchTradingPairsFailed())
    }
}
