import * as actionTypes from './actionTypes';

export const initPairDetails = (pairId) => {
    return {
        type: actionTypes.INIT_PAIR_DETAILS,
        pairId,
    };
};

export const fetchPairDetailsStart = () => {
    return {
        type: actionTypes.FETCH_PAIR_DETAILS_START
    };
};

export const fetchPairDetailsSuccess = (pairDetails) => {
    return {
        type: actionTypes.FETCH_PAIR_DETAILS_SUCCESS,
        pairDetails: pairDetails
    }
};

export const fetchPairDetailsFail = (error) => {
    return {
        type: actionTypes.FETCH_PAIR_DETAILS_FAIL,
        error,
    }
};
