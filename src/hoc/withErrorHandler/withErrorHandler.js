import React from 'react';
import {connect} from 'react-redux';

import Modal from '../../components/UI/Modal/Modal';
import * as actions from '../../store/actions';

const withErrorHandler = WrappedComponent => {
    const ErrorProvider = (props) => {
        const {globalError, onClearGlobalError} = props;

        return (
            <>
                <Modal
                    show={globalError}
                    modalClosed={() => onClearGlobalError()}
                >
                    {globalError || null}
                </Modal>
                <WrappedComponent {...props} />
            </>
        );
    };

    const mapStateToProps = state => {
        return {
            globalError: state.errors.error,
        };
    };

    const mapDispatchToProps = dispatch => {
        return {
            onClearGlobalError: () => dispatch(actions.clearGlobalError()),
        };
    };

    return connect(mapStateToProps, mapDispatchToProps)(ErrorProvider);
};

export default withErrorHandler;
