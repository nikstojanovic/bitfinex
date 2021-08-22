import * as actionTypes from './actionTypes';

export const clearGlobalError = () => {
    return {
        type: actionTypes.CLEAR_GLOBAL_ERROR,
    }
};

export const globalError = (error) => {
    return {
        type: actionTypes.GLOBAL_ERROR,
        error,
    }
};