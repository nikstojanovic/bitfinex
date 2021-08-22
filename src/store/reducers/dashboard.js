import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    tradingPairs: null,
    error: null,
};

const setTradingPairs = (state, action) => {
    return updateObject (state, {
        tradingPairs: action.tradingPairs,
        error: null,
    });
};

const fetchTradingPairsFailed = (state, action) => {
    return updateObject(state, {error: action.error});
};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_TRADING_PAIRS: return setTradingPairs(state, action);
        case actionTypes.FETCH_TRADING_PAIRS_FAILED: return fetchTradingPairsFailed(state, action);
        default: return state;
    }
};

export default dashboardReducer;
