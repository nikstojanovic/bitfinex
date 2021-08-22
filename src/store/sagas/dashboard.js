import { put } from 'redux-saga/effects';

import endpoints from '../../configuration/endpoints';
import axios from '../../configuration/axiosConfig';
import * as actions from '../actions';

export function* initTradingPairsSaga(action) {
    try {
        const response = yield axios.get(endpoints.GET_TRADING_PAIRS);
        const tradingPairs = response.data.slice(0, 5);
        yield put(actions.setTradingPairs(tradingPairs));
    } catch (error) {
        yield put(actions.fetchTradingPairsFailed(error))
        yield put(actions.globalError(error))
    }
}
