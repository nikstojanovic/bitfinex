import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    tradingPairDetails: [],
    loading: false,
    error: false,
};

const fetchPairDetailsStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchPairDetailsSuccess = (state, action) => {
    return updateObject(state, {
        tradingPairDetails: action.pairDetails,
        loading: false
    });
};

const fetchPairDetailsFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const pairDetailsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_PAIR_DETAILS_START: return fetchPairDetailsStart(state, action);
        case actionTypes.FETCH_PAIR_DETAILS_SUCCESS: return fetchPairDetailsSuccess(state, action);
        case actionTypes.FETCH_PAIR_DETAILS_FAIL: return fetchPairDetailsFail(state, action);
        default: return state;
    }
};


export default pairDetailsReducer;
