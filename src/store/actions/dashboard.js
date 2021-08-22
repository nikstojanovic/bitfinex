import * as actionTypes from './actionTypes';

export const setTradingPairs = (tradingPairs) => {
    return {
        type: actionTypes.SET_TRADING_PAIRS,
        tradingPairs: tradingPairs
    }
};

export const fetchTradingPairsFailed = (error) => {
    return {
        type: actionTypes.FETCH_TRADING_PAIRS_FAILED,
        error,
    }
};

export const initTradingPairs = () => {
    return {
        type: actionTypes.INIT_TRADING_PAIRS
    };
};
