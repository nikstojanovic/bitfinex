import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    error: null,
};

const globalError = (state, action) => {
    const errorMessage = action.error?.message ? action.error.message : 'Error has occured';
    
    return updateObject(state, { error: errorMessage });
};

const clearGlobalError = (state, action) => {
    return updateObject(state, { error: null });
};

const errorsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GLOBAL_ERROR: return globalError(state, action);
        case actionTypes.CLEAR_GLOBAL_ERROR: return clearGlobalError(state, action);
        default: return state;
    }
};


export default errorsReducer;
