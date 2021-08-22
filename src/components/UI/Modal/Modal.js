import React from 'react';
import PropTypes from 'prop-types';

import Backdrop from '../Backdrop/Backdrop';

import './Modal.scss';

const Modal = ({show, modalClosed, children}) => {
    return (
        <>
            <Backdrop show={show} clicked={modalClosed}/>
            <div
                className="Modal"
                style={{opacity: show ? '1' : '0'}}
            >
                {children}
            </div>
        </>
    );
}

Modal.propTypes = {
    show: PropTypes.bool,
    modalClosed: PropTypes.func.isRequired,
    children: PropTypes.any,
};

Modal.defaultProps = {
    show: false,
    children: '',
};

export default Modal;
