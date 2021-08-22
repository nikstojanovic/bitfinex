import React from 'react';

import './Modal.scss';
import Backdrop from '../Backdrop/Backdrop';

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

export default Modal;
