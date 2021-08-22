import React, { Component } from 'react';

import './Modal.scss';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render () {
        return (
            <>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div
                    className="Modal"
                    style={{opacity: this.props.show ? '1' : '0'}}
                >
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default Modal;
