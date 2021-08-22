import * as actionTypes from './actionTypes';

export const setTradingPairs = (tradingPairs) => {
    return {
        type: actionTypes.SET_TRADING_PAIRS,
        tradingPairs: tradingPairs
    }
};

export const fetchTradingPairsFailed = () => {
    return {
        type: actionTypes.FETCH_TRADING_PAIRS_FAILED
    }
};

export const initTradingPairs = () => {
    return {
        type: actionTypes.INIT_TRADING_PAIRS
    };
};
